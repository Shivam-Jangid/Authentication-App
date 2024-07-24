import React from 'react'
export default function Home() {
  return (
    <div>
        <h1 className='Buttons mx-3'>Skills</h1>
        <div className='FlexBox'>
            <div id='html' className='flex'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s' />
                <h2>HTML</h2>
            </div>
            <div id='css' className='flex'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' />
                <h2>CSS</h2>
            </div>
            <div id='JS' className='flex'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaERathZl4oiIQfs70fGsf-GWMH0bZe2x2eQ&s'id='node_pp' />
                <h2>Javascript</h2>
            </div>
            <div id='nodejs' className='flex'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'  />
            <h2>Node.JS</h2>
            </div>
            <div id='expressjs' className='flex'>
            <img  id='node_pp'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWd8ZEM4nA7Ycx0I70edHD_UqqGAFV7qbFgw&s'  />
            <h2>Express.JS</h2>
            </div>
            <div id='reactjs' className='flex'>
            <img id='node_pp' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s'  />
            <h2>React.JS</h2>
            </div>
            <div id='zod' className='flex'>
            <img id='node_pp' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncPtCm9MJhP78mjaF1FAQeE6FjSuruEsNDw&s'/>
            <h2>Zod</h2>
            </div>
            <div id='jwt' className='flex'>
            <img id='node_pp' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtgOAt7WfhErEvoSt2cfykiJQC4cf57V1rg&s'/>
            <h2>JWT</h2>
            </div>
            <div id='mongodb' className='flex'>
            <img src='https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png'  />
            <h2>MongoDB</h2>
            </div>
        </div>
        <h1 className='Buttons mx-3'>Programming Languages</h1>
        <div className='FlexBox'>
        <div id='c' className='flex'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' />
                <h2>C</h2>
            </div>
        <div id='cpp' className='flex'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHmPpA_46SFLpKbBsJb8bag-LFSL7bw_oNw&s' />
                <h2>C++</h2>
            </div>
            <div id='python' className='flex'>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxe6IR3EKgALq0lEUvpW3GmPH8rpAv1cK0_w&s' />
                <h2>Python</h2>
            </div>  
        </div>
    </div>
  )
}
