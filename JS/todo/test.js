/*

 <tr>
 <th scope="row">2 </th>
 <td>Jacob</td>
 <td>Thornton</td>
 <td>@fat</td>
 </tr>


 */

 const table_body = document.querySelector('.data')

 console.log(table_body)

 // CREATE NEW TR IN JS

 let tr = document.createElement('tr')
 let th = document.createElement('th')
 let td_first = document.createElement('td')
 let td_last = document.createElement('td')
 let td_handle = document.createElement('td')

 let thCOntext = document.createTextNode("4");
 th.appendChild(thCOntext)

 td_first.appendChild(document.createTextNode("Joe"))
 td_last.appendChild(document.createTextNode("Dalton"))
 td_handle.appendChild(document.createTextNode("@intec_brussel"))

 tr.appendChild(th)
 tr.appendChild(td_first)
 tr.appendChild(td_last)
 tr.appendChild(td_handle)


 table_body.appendChild(tr)

 console.log(tr) // template 