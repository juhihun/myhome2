package com.yedam.web;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.dao.EmpDAO;
import com.yedam.vo.EmpVO;

@WebServlet("/empsave.json")
public class EmpJson extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 추가(add) 수정(edit) 삭제(delete)
		// 삭제기능(사원번호 emp.html에서 파라미터 수신)
		resp.setContentType("text/html;charset=utf-8");
		String job = req.getParameter("job");
		EmpDAO edao = new EmpDAO();
		String eno = req.getParameter("empNo");
		String d = req.getParameter("hire");
		String e = req.getParameter("email");
		EmpVO evo = new EmpVO();
		String c = req.getParameter("salary");
		String a = req.getParameter("name");
		String b = req.getParameter("phone");
		Map<String, Object> map = new HashMap<>();
		Gson gson = new GsonBuilder().create();
		if (job.equals("add")) {

			evo.setEmpName(a);
			evo.setEmpPhone(b);
			evo.setSalary(Integer.parseInt(c));
			evo.setHireDate(d);
			evo.setEmail(e);
			
			if (edao.insertEmp(evo)) {
				map.put("retCode", "OK");
				map.put("retVal", evo);

				resp.getWriter().print(gson.toJson(map));
			} else {

				map.put("retCode", "NG");
				map.put("retVal", null);
				resp.getWriter().print(gson.toJson(map));
			}

		} else if (job.equals("edit")) {
			
			evo.setEmpNo(Integer.parseInt(eno));
			evo.setSalary(Integer.parseInt(c));
			evo.setEmail(e);
			if(edao.updateEmp(evo)) {
				evo = edao.selectEmp(evo.getEmpNo()); //empName 가져오기 위함_위에 이름이 없음
				map.put("retCode", "OK");
				map.put("retVal", evo);
			}else {
				map.put("retCode", "NG");
				map.put("retVal", null);
			}
			resp.getWriter().print(gson.toJson(map));
		} else if (job.equals("delete")) {

			// 삭제
			if (edao.deleteEmp(Integer.parseInt(eno))) {
				resp.getWriter().print("{\"retCode\":\"OK\"}");
			} else {
				resp.getWriter().print("{\"retCode\":\"NG\"}");
			}

		}

//		if(edao.insertEmp(eno)) {
//			resp.getWriter().print("{\"retCode\":\"OK\"}");
//		}else {
//		resp.getWriter().print("{\"retCode\":\"NG\"}");
//		}
//		

	}
}
