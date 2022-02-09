import './App.css';

function App() {
  const data = [
    {
      id: 512,
       name: "Neil Rhodes",
       email: "rhodes@hmc.edu",
       phone: "(909) 555-1212"
     },
    {
      id: 787,
       name: "Barack Obama",
       email: "ex-prez@whitehouse.gov",
       phone: "(312) 555-1212"
     }
  ];

  var namesList = data.map((contact) => 
      <tr key={contact.id}>
      <td> {contact.name}</td>
      <td> {contact.email}</td>
      <td> {contact.phone}</td>
     </tr>
  )

  return (
    <div className="App">
      <h3> People </h3>
      <table>
        <tbody>{namesList}
        </tbody>
        </table>
    </div>
  );
}

export default App;
