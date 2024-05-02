package com.yedam.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.yedam.common.DAO;
import com.yedam.vo.EmpVO;

public class EmpDAO extends DAO {
	public List<Map<String, Object>> empList() {
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();

		conn();
		try {
			psmt = conn.prepareStatement("select * from emp");
			rs = psmt.executeQuery();

			while (rs.next()) {
				Map<String, Object> map = new HashMap<>();
				map.put("사원번호", rs.getInt("emp_no"));
				map.put("사원명", rs.getString("emp_name"));
				map.put("사원연락처", rs.getString("emp_phone"));
				map.put("이메일", rs.getString("email"));

				list.add(map);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disCon();
		}
		return list;
	}

	// 목록 List<EmpNo> selectList();
	public List<EmpVO> selectList() {
		conn();
		List<EmpVO> list = new ArrayList<EmpVO>();
		String sql = "select * from emp order by emp_no";

		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();

			while (rs.next()) {
				EmpVO empvo = new EmpVO();
				empvo.setEmpNo(rs.getInt("emp_no"));
				empvo.setEmpName(rs.getString("emp_name"));
				empvo.setEmpPhone(rs.getString("emp_phone"));
				empvo.setSalary(rs.getInt("salary"));
				empvo.setEmail(rs.getString("email"));
				list.add(empvo);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}// end of selectList

	public EmpVO selectEmp(int empNo) {
		conn();
		try {
			psmt = conn.prepareStatement("select * from emp where emp_no = ?");
			psmt.setInt(1, empNo);
			rs = psmt.executeQuery();

			if (rs.next()) {
				EmpVO empvo = new EmpVO();
				empvo.setEmpNo(rs.getInt("emp_no"));
				empvo.setEmpName(rs.getString("emp_name"));
				empvo.setEmpPhone(rs.getString("emp_phone"));
				empvo.setSalary(rs.getInt("salary"));
				empvo.setEmail(rs.getString("email"));
				return empvo;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disCon();
		}

		return null;
	}

	// 등록 boolean insertEmp(EmpVo evo);
	public boolean insertEmp(EmpVO evo) {
		conn();
		String sql = "insert into emp (emp_no, emp_name, emp_phone, salary,email,hire_date)" + "values(?,?,?,?,?,?)";
		String seqSql = "select emp_no_seq.nextval from dual";
		int seq = 0;
		try {
			psmt = conn.prepareStatement(seqSql);
			rs = psmt.executeQuery();
			if (rs.next()) {
				seq = rs.getInt(1);
				evo.setEmpNo(seq); // 매개변수의 evo에 empNo저장
			}
			psmt = conn.prepareStatement(sql);
			psmt.setString(2, evo.getEmpName());
			psmt.setString(3, evo.getEmpPhone());
			psmt.setInt(4, evo.getSalary());
			psmt.setString(5, evo.getEmail());
			psmt.setString(6, evo.getHireDate());
			psmt.setInt(1, seq);

			int r = psmt.executeUpdate();
			if (r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disCon();
		}
		return false;

	}

	// 수정 boolean updateEmp(int empNo); //이메일, 급여 변경
	public boolean updateEmp(EmpVO evo) {
		conn();
		String sql = "update emp" + " set salary = ?, email = ?" + "where emp_no = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, evo.getSalary());
			psmt.setString(2, evo.getEmail());
			psmt.setInt(3, evo.getEmpNo());

			int r = psmt.executeUpdate();
			if (r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disCon();
		}
		return false;
	}

	// 삭제 boolean deleteEmp(int empNo); //
	public boolean deleteEmp(int empNo) {
		conn();
		try {
			psmt = conn.prepareStatement("delete emp where emp_no = ?");
			psmt.setInt(1, empNo);

			int r = psmt.executeUpdate();
			if (r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disCon();
		}
		return false;
	}
}// end class
