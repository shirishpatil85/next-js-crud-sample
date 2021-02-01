import * as t from "../types";

export const setModalOpenAction = (isModalOpen) => {
	return {
		type: t.MODAL_OPEN,
		payload: isModalOpen,
	};
};

export const fetchEmployeesAction = () => {
	return {
		type: t.EMPLOYEE_FETCH_REQUESTED,
	};
};

export const addEmployeeAction = (employee) => {
	return {
		type: t.EMPLOYEE_ADD_REQUESTED,
		payload: employee,
	};
};

export const updateEmployeeAction = (employee) => {
	return {
		type: t.EMPLOYEE_UPDATE_REQUESTED,
		payload: employee,
	};
};

export const deleteEmployeeAction = (id) => {
	return {
		type: t.EMPLOYEE_DELETE_REQUESTED,
		payload: id,
	};
};

export const setSelectedEmployeeAction = (id) => {
	return {
		type: t.EMPLOYEE_SELECTED,
		payload: id,
	};
};
