import { all, put, takeLatest } from "redux-saga/effects";
import * as t from "../types";

function* fetchEmployeesSaga() {
	try {
		const response = yield fetch("/api/employees");

		const employeeList = yield response.json();

		yield put({
			type: t.EMPLOYEE_FETCH_SUCCEEDED,
			payload: employeeList.data,
		});
	} catch (error) {
		yield put({
			type: t.EMPLOYEE_FETCH_FAILED,
			payload: error.message,
		});
	}
}

function* watchFetchEmployeesSaga() {
	yield takeLatest(t.EMPLOYEE_FETCH_REQUESTED, fetchEmployeesSaga);
}

function* addEmployeeSaga(action) {
	try {
		const response = yield fetch("/api/employees", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(action.payload),
		});

		const newEmployee = yield response.json();

		yield put({
			type: t.EMPLOYEE_ADD_SUCCEEDED,
			payload: newEmployee.data,
		});
	} catch (error) {
		yield put({
			type: t.EMPLOYEE_ADD_FAILED,
			payload: error.message,
		});
	}
}

function* watchAddEmployeeSaga() {
	yield takeLatest(t.EMPLOYEE_ADD_REQUESTED, addEmployeeSaga);
}

function* deleteEmployeeSaga(action) {
	try {
		const response = yield fetch("/api/employees/" + action.payload, {
			method: "DELETE",
		});

		const deletedEmployee = yield response.json();

		yield put({
			type: t.EMPLOYEE_DELETE_SUCCEEDED,
			payload: deletedEmployee.data.id,
		});
	} catch (error) {
		yield put({
			type: t.EMPLOYEE_DELETE_FAILED,
			payload: error.message,
		});
	}
}

function* watchRemoveEmployeeSaga() {
	yield takeLatest(t.EMPLOYEE_DELETE_REQUESTED, deleteEmployeeSaga);
}

function* updateEmployeeSaga(action) {
	try {
		const response = yield fetch("/api/employees/" + action.payload._id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(action.payload),
		});

		const updatedEmployee = yield response.json();

		yield put({
			type: t.EMPLOYEE_UPDATE_SUCCEEDED,
			payload: updatedEmployee.data,
		});
	} catch (error) {
		yield put({
			type: t.EMPLOYEE_UPDATE_FAILED,
			payload: error.message,
		});
	}
}

function* watchUpdateEmployeeSaga() {
	yield takeLatest(t.EMPLOYEE_UPDATE_REQUESTED, updateEmployeeSaga);
}

export default function* rootSaga() {
	yield all([
		watchFetchEmployeesSaga(),
		watchAddEmployeeSaga(),
		watchRemoveEmployeeSaga(),
		watchUpdateEmployeeSaga(),
	]);
}
