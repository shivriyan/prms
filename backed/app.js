const API = 'http://localhost:3000/api';


async function fetchPatients() {
const res = await fetch(`${API}/patients`);
const data = await res.json();
const tbody = document.querySelector('#patientsTable tbody');
tbody.innerHTML = '';
data.forEach(p => {
const tr = document.createElement('tr');
tr.innerHTML = `<td>${p.Patient_ID}</td><td>${escapeHtml(p.Name)}</td><td>${p.Age ?? ''}</td><td>${p.Gender ?? ''}</td><td>${p.Contact ?? ''}</td><td>${p.Address ?? ''}</td>`;
tbody.appendChild(tr);
});
}


function escapeHtml(s = '') {
return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
}


document.getElementById('patientForm').addEventListener('submit', async (e) => {
e.preventDefault();
const fd = new FormData(e.target);
const payload = Object.fromEntries(fd.entries());
if (payload.Age) payload.Age = parseInt(payload.Age, 10);


const res = await fetch(`${API}/patients`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
});
if (res.ok) {
e.target.reset();
await fetchPatients();
} else {
const err = await res.json().catch(()=>({error:'unknown'}));
alert('Error: ' + (err.error || 'unknown'));
}
});


fetchPatients();
