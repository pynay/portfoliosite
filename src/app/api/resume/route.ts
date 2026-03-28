import { NextResponse } from "next/server";

/*
  GET /api/resume — redirects to the Google Docs PDF export.
  The resume auto-updates whenever the Google Doc is edited.
  No rebuild or re-upload needed.

  To change the source doc, update the RESUME_DOC_ID below.
*/
const RESUME_DOC_ID = "1APTqdc17SWWkkAcgQZl2oHywztC36WTygk9ek92JKe0";

export function GET() {
  return NextResponse.redirect(
    `https://docs.google.com/document/d/${RESUME_DOC_ID}/export?format=pdf`
  );
}
