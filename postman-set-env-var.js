console.log('responseBody', responseBody, typeof responseBody) // string
body = JSON.parse(responseBody)
pm.environment.set("patient_id", body.data.patient_id);
