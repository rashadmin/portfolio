import React from 'react'
import IndPortfolio from './indPortfolio'

export default function PortfolioItem({page}) {
  const items = [{projectTitle:"First Project",tag:['Frontend','Backend']},
                  {projectTitle:"Second Project",tag:['DataScience','Research','DataEngineering']},
                  {projectTitle:"Third Project",tag:['Backend','DataScience']},
                  {projectTitle:"Fourth Project",tag:['Frontend','Backend']},
                  {projectTitle:"Fifth Project",tag:['DataScience','Research',]},
                  {projectTitle:"Sixth Project",tag:['DataEngineering']},
                  {projectTitle:"Seventh Project",tag:['Research','DataEngineering']},
                  {projectTitle:"Eighth Project",tag:['Frontend','DataEngineering']},
                  {projectTitle:"Nineth Project",tag:['Frontend','Research']},
                  {projectTitle:"Tenth Project",tag:['DataScience','Research']},                  
                  {projectTitle:"Eleventh Project",tag:['Research','DataEngineering']},
                  {projectTitle:"Twelveth Project",tag:['Frontend','Backend','Research',]},
                  {projectTitle:"Thirteenth Project",tag:['Frontend','DataScience','DataEngineering']}
]
  return (
    <div className='PortfolioItem'>
       {page ? 
       items.map((element)=> element['tag'].includes(page) && <IndPortfolio projectTitle={element["projectTitle"]} tag={element["tag"]}/>): 
       items.map((element)=> <IndPortfolio projectTitle={element["projectTitle"]} tag={element["tag"]}/>)}
    </div>
  )
}
