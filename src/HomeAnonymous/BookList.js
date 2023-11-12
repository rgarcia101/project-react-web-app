import Theboysintheboat from './Theboysintheboat.jpg';
import { React, useState} from "react"


function BookList(){
  return(
      <div className="table-responsive">
        <table className = "table">
          <tbody>

          {/*TRY TO ADD IN A LOOP */}
          {/*{books.map((book) => (*/}
          {/*    <tr key={book._id} className="book-row">*/}
          {/*      <td className="book-cell">*/}
          {/*        <div className="book-info">*/}
          {/*          <span className="book-number">{book._id}</span>*/}
          {/*          <img src={book.image} alt={book.title} className="custom-image" />*/}
          {/*          <div className="book-details"><strong>{book.title}</strong></div>*/}
          {/*          <div className="book-details">by {book.author}</div>*/}
          {/*        </div>*/}
          {/*      </td>*/}
          {/*    </tr>*/}
          {/*))}*/}


          <tr>
            <td>
              <div>
                <img src={Theboysintheboat} alt="Theboysintheboat" className="custom-image" />
                <div style={{ fontSize: "0.8em"}}><strong>1. THE BOYS IN THE BOAT</strong></div>
                <div style={{ fontSize: "0.8em"}}>by Daniel James Brown</div>
              </div>
            </td>
            <td>
              <div>
                <img src={Theboysintheboat} alt="Theboysintheboat" className="custom-image" />
                <div style={{ fontSize: "0.8em"}}><strong>2. THE BOYS IN THE BOAT</strong></div>
                <div style={{ fontSize: "0.8em"}}>by Daniel James Brown</div>
              </div>
            </td>
            <td>
              <div>
                <img src={Theboysintheboat} alt="Theboysintheboat" className="custom-image" />
                <div style={{ fontSize: "0.8em"}}><strong>3. THE BOYS IN THE BOAT</strong></div>
                <div style={{ fontSize: "0.8em"}}>by Daniel James Brown</div>
              </div>
            </td>
            <td>
              <div>
                <img src={Theboysintheboat} alt="Theboysintheboat" className="custom-image" />
                <div style={{ fontSize: "0.8em"}}><strong>4. THE BOYS IN THE BOAT</strong></div>
                <div style={{ fontSize: "0.8em"}}>by Daniel James Brown</div>
              </div>
            </td>
            <td>
              <div>
                <img src={Theboysintheboat} alt="Theboysintheboat" className="custom-image" />
                <div style={{ fontSize: "0.8em"}}><strong>5. THE BOYS IN THE BOAT</strong></div>
                <div style={{ fontSize: "0.8em"}}>by Daniel James Brown</div>
              </div>
            </td>
            <td>
              <div>
                <img src={Theboysintheboat} alt="Theboysintheboat" className="custom-image" />
                <div style={{ fontSize: "0.8em"}}><strong>6. THE BOYS IN THE BOAT</strong></div>
                <div style={{ fontSize: "0.8em"}}>by Daniel James Brown</div>
              </div>
            </td>
            <td >
              <div>
                <img src={Theboysintheboat} alt="Theboysintheboat" className="custom-image" />
                <div style={{ fontSize: "0.8em"}}><strong>7. THE BOYS IN THE BOAT</strong></div>
                <div style={{ fontSize: "0.8em"}}>by Daniel James Brown</div>
              </div>
            </td>
            <td>
              <div>
                <img src={Theboysintheboat} alt="Theboysintheboat" className="custom-image" />
                <div style={{ fontSize: "0.8em"}}><strong>8. THE BOYS IN THE BOAT</strong></div>
                <div style={{ fontSize: "0.8em"}}>by Daniel James Brown</div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
  )
}

export default BookList