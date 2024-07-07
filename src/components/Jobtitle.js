import React from 'react'

function Jobtitle({className}) {
  const jobs = ["Data Scientist","Data Engineer","Frontend Developer","Backend Developer", "Researcher"]
  let format_total;
  function format(total="", job) {
    return total + " | " + job;
  }
  format_total = jobs.reduce(format)
  console.log(format_total)
  return (
    <p className={className}>{format_total}</p>
  )
}
export default Jobtitle