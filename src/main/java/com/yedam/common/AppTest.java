package com.yedam.common;

import java.util.List;

import com.yedam.dao.EmpDAO;
import com.yedam.vo.EmpVO;

public class AppTest {

	public static void main(String[] args) {

		EmpDAO edao = new EmpDAO();
		EmpVO evo = new EmpVO();
		
		evo.setEmpName("ㅎㅎㅎ");
		evo.setEmpPhone("010-555-466");
		evo.setEmail("fffs@ss");
		evo.setSalary(5400);
		edao.insertEmp(evo);
		
//		evo.setEmail("ggg@vv");
//		evo.setSalary(90000);
//		evo.setEmpNo(7);
//		edao.updateEmp(evo);
//		
		
		
//		edao.deleteEmp(2);
		
		List<EmpVO> list = edao.selectList();
		for(EmpVO vo : list){
			System.out.println(vo.toString());
		}
		

	}

}
