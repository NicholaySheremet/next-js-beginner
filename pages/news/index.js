import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>All news page</h1>
      <ul>
        <li>
          <Link href="/news/1">Link to news page</Link>
        </li>
        <li>else...</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
