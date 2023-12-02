import HowBeautiful from './/HowBeautiful.jpg';

function X_Newsfeed(){
  return(
      <div className = "wd-general">
        <table className="table-newsfeed">
          <tbody>
          <tr className = "table-newsfeed-header-row" >
            <th scope="col">Date</th>
            <th scope="col">Book</th>
            <th scope="col"></th>
            <th scope="col">Update</th>
          </tr>
          <tr>
            <td>
              Oct 14, 2023
            </td>
            <td>
              <img src={HowBeautiful} alt="HowBeautiful" className="custom-image" />
            </td>
            <td>
              <div><strong>How Beautiful We Were</strong></div>
              <div>by Imbolo Mbue</div>
            </td>
            <td>
              <strong>UserA</strong> rated this book.
            </td>
          </tr>
          <tr>
            <td>
              Oct 12, 2023
            </td>
            <td>
              <img src={HowBeautiful} alt="HowBeautiful" className="custom-image" />
            </td>
            <td>
              <div><strong>How Beautiful We Were</strong></div>
              <div>by Imbolo Mbue</div>
            </td>
            <td>
              <strong>UserB</strong> rated this book.
            </td>
          </tr>
          <tr>
            <td>
              Oct 92, 2023
            </td>
            <td>
              <img src={HowBeautiful} alt="HowBeautiful" className="custom-image" />
            </td>
            <td>
              <div><strong>How Beautiful We Were</strong></div>
              <div>by Imbolo Mbue</div>
            </td>
            <td>
              <strong>AUTHOR Imbolo Mbue</strong>: sign up to get a free copy
            </td>
          </tr>
          </tbody>
        </table>
      </div>
  )
}

export default X_Newsfeed