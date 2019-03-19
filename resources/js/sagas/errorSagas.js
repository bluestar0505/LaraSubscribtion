import { CREATE, GET_ONE, CRUD_CREATE, CRUD_CREATE_FAILURE, CRUD_CREATE_SUCCESS, FETCH_END, FETCH_ERROR, FETCH_CANCEL } from 'react-admin';
import { stopSubmit } from 'redux-form';
import { put, call, takeEvery } from 'redux-saga/effects';
import { createCustomer } from '../utils/axiosInstance';

export default function* errorSagas() {
    yield takeEvery(CRUD_CREATE, crudCreateFailure);
}

const extractViolations = (json) => {
    console.log('VIOLATIONS>>>>>', json);
    const errors = {
        email: 'ERROR1',
        phone: 'ERROR2'
    };
    return errors;
}

const check = (action) => {
    action.type = CRUD_CREATE_SUCCESS;

    createCustomer(action.payload).then((res) => {
        console.log('RES: ', res)
        if (res.data.error) {
            action.meta.onSuccess.notification = {
                body: res.data.error,
                level: 'warning',
            };
        }
        put(action);
    }).catch(err => {
        console.log('CATCH: ', err);
        put({ type: CRUD_CREATE_SUCCESS });
    });
}

export function* crudCreateFailure(action) {
    var json = action.payload;

    console.log('STOPPED!!!', action);

    yield call(() => check(action));
    yield put({ type: FETCH_CANCEL });
    

    // The extractViolations function searches in the response's json
    // all the violation and output a json structure looking like this:
    // {
    //     age: "You must be at least 13 years old to use this service",
    //     username: "This username is already taken"
    // }
    /*const violations = extractViolations(json);

    action.type = CRUD_CREATE_SUCCESS;

    action.meta.onSuccess.notification = {
        body: 'ERROR!!!',
        level: 'warning',
    };
    action.meta.onSuccess.callback = (val) => {
        console.log('CALLBACK', val);
        createCustomer(action.payload).then((res) => {
            console.log('RES: ', res)
        }).catch(err => {
            console.log('CATCH: ', err);
        });
    }
    action.meta.onFailure.callback = (val) => {
        console.log('CALLBACK2', val);
    }

    /*yield put({ type: FETCH_CANCEL });
    yield call(() => stopSubmit('record-form', {
        email: 'ERROR1',
        phone: 'ERROR2'
    }));*/
}