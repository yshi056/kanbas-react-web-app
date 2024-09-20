export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <ul className="wd-assignment-list">
            <ul className="wd-assignment-list-item">Multiple Modules | Not avaliable until May 6 at 12:00am |</ul>
            <ul className="wd-assignment-list-item">Due May 13 at 11:59pm | 100pts</ul>
            </ul>
          </li>
          <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
            </a>
            <ul className="wd-assignmen-list">
            <ul className="wd-assignment-list-item">Multiple Modules | Not avaliable until May 13 at 12:00am |</ul>
            <ul className="wd-assignment-list-item">Due May 20 at 11:59pm | 100pts</ul>
            </ul>
          </li>
          <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIPT + REACT
            </a>
            <ul className="wd-assignment-list">
            <ul className="wd-assignment-list-item">Multiple Modules | Not avaliable until May 20 at 12:00am |</ul>
            <ul className="wd-assignment-list-item">Due May 27 at 11:59pm | 100pts</ul>
            </ul>
          </li>
        </ul>
      </div>
  );}
  
  