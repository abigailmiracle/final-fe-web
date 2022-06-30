export default function Page (){
    return (
        <div>
  <title>Membuat Biodata Sederhana</title>
  <table border={1} style={{width: 700}}>
    <tbody><tr><td align="center" colSpan={3} bgcolor="red"><font color="blue" size="20px">
            <b>BIODATA</b>
          </font></td></tr>
      <tr>
        <td rowSpan={5} width="100px">
          <img src="image.jpg" width="150px" height="200px" alt="fotorandom" border={2} />
        </td>
        <td bgcolor="#0000FF">NAMA </td>
        <td> WELDY SIMON </td>
      </tr>
      <tr>
        <td bgcolor="#0000FF"> UMUR </td>
        <td> 23 TAHUN </td>
      </tr>
      <tr>
        <td bgcolor="#0000FF"> ALAMAT </td>
        <td> LUWU UTARA </td>
      </tr>
      <tr>
        <td bgcolor="#0000FF"> HOBI </td>
        <td> MEMBACA DAN MENULIS </td>
      </tr>
      <tr>
        <td align="center" colSpan={2} bgcolor="white"> <a href="https://www.anaktekno.com">WWW.ANAKTEKNO.COM</a> </td>
      </tr>
    </tbody></table>
</div>

    )
}