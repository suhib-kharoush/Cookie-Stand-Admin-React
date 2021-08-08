
import Form from '../context/createForm'
import ReportTable from '../context/reportTable'

import { useState, useEffect } from 'react'
import axios from 'axios'


function CookieStandMain({ token, reportList }) {
  return (
    <div className="flex flex-col p-5 bg-white ">
      <div className="flex-col self-center w-3/4 p-5 bg-green-300 rounded-lg">
        <h2 className="text-2xl text-center">Create Cookie Stand</h2>
        <Form token={token}></Form>
      </div>

      <ReportTable token={token} reportList={reportList}></ReportTable>
    </div>
  )
}

export default CookieStandMain