import React, { Component } from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

import market from './marketdata-img.jpeg'
import production from './img1.png'
import jobs from './img2.png'
import war from './img3.png'
import fred from './img4.png'
import coal from './img6.png'
import carbon from './img7.png'
import invest from './img8.png'
import pdf from './bib.pdf'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '10vh', color: '#000'}}>
                    Outcomes of Outsourcing
                </h1>
                <img width='70%' src={market} style={{paddingTop: '10px'}}/>
                <div style={{fontSize: '6px'}}>
                    https://anovanetworks.com/wp-content/uploads/2019/05/marketdata-img.jpg
                </div>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', paddingTop: '3vh', wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    As Engineers, we often times need to think about how we will procure materials and gather a labor force. Maybe not you, personally, but somewhere along the lines someone at your company needs to make these decisions. You may not have thought of this before, but resources come from all over the world and are not necessarily a product of US labor. Data from the St. Louis Federal Reserve Economic Data shows that America has increased imports of all goods, including building materials, at an extreme rate. Often times this is done in an attempt to save money on resources, which is very lucrative given that materials from developing nations are a significant degree cheaper than if they were harvested or produced locally.                 </p>
                <img width='70%' src={fred} style={{paddingTop: '10px'}}/>
                <div style={{fontSize: '6px'}}>
                    FRED database
                </div>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', paddingTop: '3vh', wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    Well, why is this important? As with any engineering topics, it is a balance of risks and rewards. The aim of this page is to effectively communicate risk to you and your team. <i>Risk communication</i>, which is defined as the way in which the risks of a given situation, is very important for successful engineering projects (Leydens, 2021). If risk is communicated poorly something as bad as a catastrophic event could happen as a result. Recent trends in global data, as well as personal experiences from people living in developing nations, suggest that there are both positive and negative outcomes of importing materials. What is the impact on you, your company, and the rest of the world as a result of material outsourcing? Before we dive into this, let me give you some historical perspective. After the end of the colonial period, many countries were left to adjust to newly formed governments to take the place of the colonial rulers. While these countries were no longer required to exchange materials with one another, the developing countries still needed to exchange goods with their previous rulers.                 </p>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    Let's dive into some of the prevailing perspectives on the topic while we talk about the positives and negatives as well. The first perspective we will explore is that of the Nationalist/Protectionist. As you may have already guessed, nationalists believe that globalization is bad. But, why? In the eyes of the Nationalist, any money spent or invested in foreign materials and foreign industry is money that could have been used to strengthen American industry and create jobs for Americans. Former president Trump was a big fan of this idea and often engaged in protectionism, which I will now explain. Protectionism is the process of protecting one's own industry by means of trade tariffs that lead to an overall decrease in imports (Trade, 2021). This will also lead to increased domestic production. which means that more jobs are created for Americans (Helper, 2012). According to many people, the US is currently losing a trade war to China due to our high import and low export situation. Whether or not this is truly beneficial for the American economy is up for debate, but you can see why people would believe that globalization is ultimately a bad thing.                 </p>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    The opposite perspective to the Nationalist would be the Globalist perspective. A recent survey shows that the majority of Americans believe that global trade is beneficial, but very in the degree to which they believe so (Stokes, 2020). It is obvious that the Globalist believes that globalization is a good thing for the world, but what makes them feel this way? The Globalist believes that trading materials around the world will lead to economic gains in a multitude of ways. Firstly, they believe that buying cheaper materials from another country will lead to cheaper consumer prices. This is expected to essentially raise the real wage of citizens in western countries by giving them more spending money that is saved due to low costs of goods. This is also expected to create more effective business models and increase business productivity (Erixon, 2018). 
                </p>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    The final common perspective that people have in regards to outsourced materials is the sociologist/anthropologist perspective. Sociologists and anthropologists, while not disagreeing with the economic reasons, believe that globalization has negative consequences for economies and people around the world. One of the main sociological theories that backs this up is dependency theory. Dependency theory describes the current global market in terms of core (powerful) nations and peripheral (developing) nations.(Chase-Dunn, 2015). Chase-Dunn states that peripheral nations rely on these global trade agreements to maintain and slightly improve on their own economies. At the same time, the economic gains attained by the core nations that get cheaper production end up gaining significantly more from using these materials than the peripheral nations get from selling them. This is believed to lead to big increases in the wealth gap between core and peripheral nations, as well as creating a wealth gap between citizens in the peripheral nations. Sociologists also believe that increased factory creation in these areas, which is often done due to lack of pollution regulations, is severely damaging the environment and destroying the living spaces of many people.
                </p>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    Now that you have some perspective on the various view points you may have already decided which ideation you align with the most. Even if you haven't, you may be under the influence of biases that affect your decision making when it comes to making choices in your supply chain. Taking the bias quiz on this website will help you determine if you have bias, and if so, may help by providing additional information. After taking the quiz make sure to return to this page for my statistical conclusion, as well as suggestions on how to properly deal with the risks. You can click the blue risk communication text on top bar to return here after.
                </p>
                <Link to='/quiz' className='ml-auto'>
                    <button className='btn btn-outline-dark text-capitalize' style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
                        Take The Quiz!
                    </button>
                </Link>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', paddingTop: '8vh',wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    How was the quiz? I hope it was informative! Well, now that you understand potential biases you may have, let's talk about the facts that relate to this topic. This topic tends to cause a lot of <i>cognitive dissonance</i>, which is psychological stress when holding conflicting viewpoints (NASEM, 2017). Most people would like to save money, are also concerned with the wellbeing of global populations, and also want to create jobs within their own countries. Hopefully, we can help some of you overcome this by sharing the current research/data. One of the ideas we discussed previously is protectionism. Protectionism may seem to make sense when you think about the large number of jobs that are lost when buying resources from other countries, but is this really the case? Research shows that jobs in manufacturing are falling as a product of imports, but also shows that companies are able to hire more workers in other fields as a result of their savings (Beltekian, 2018). 
                </p>
                <img width='70%' src={jobs} style={{paddingTop: '10px'}}/>
                <div style={{fontSize: '6px'}}>
                    https://ourworldindata.org/trade-and-globalization                
                </div>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', paddingTop: '3vh',wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                This effectively means that total American jobs have not actually changed much as a result of increased imports. Is the United States currently losing a trade war to China? It depends on how you define losing. As you can see in the graph below, China is exporting significantly more than the US (mostly imports).                    </p>
                <img width='70%' src={war} style={{paddingTop: '10px'}}/>
                <div style={{fontSize: '6px'}}>
                    https://ourworldindata.org/trade-and-globalization                
                </div>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', paddingTop: '3vh',wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    Does this necessarily mean the US is losing? The data would suggest that this isn't the case. Trends in GDP have shown that GDP has been increasing heavily as a result of trade, which would indicate that countries are much more productive than when they were trading less. The graph below depicts the change in per capita GDP of countries vs the GDP growth from trade.                 
                </p>
                <img width='70%' src={production} style={{paddingTop: '10px'}}/>
                <div style={{fontSize: '6px'}}>
                    https://ourworldindata.org/trade-and-globalization                
                </div>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', paddingTop: '3vh',wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    Given the current data, I believe we can certainly assume that the risk losing a trade was and the risk of losing jobs as a result of trading is minimal. It is easy to associate outsourcing with a sense of anti-patriotism, but that isn't the case. Many people, possibly even you, may feel a gut reaction when your patriotism comes into question, but this is simply how humans process information. After a gut reaction people will use <i>post-hoc reasoning</i>, which is the brains ability to justify this gut reaction after the fact, to justify the attack on their values(Haidt, 2012, Ch.1). Don't worry! Outsourcing labor does not make you any less of an American (or other nationality). In fact, it is helping us remain competitive and more productive. The Government is one of many <i>merchants of fear</i> who use scare tactics to push their agenda (Garnder, 2008), so be sure to double check every you hear. Even if it is from the president.                 </p>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw',wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    Now let's discuss the data related to the sociologist/anthropologist perspective. As stated previously, this group believes that developing nations are being exploited and are experiencing environmental damage due to globalization. What is the validity of this? Unfortunately, there is actually a good deal of supporting evidence for this. Research by Christopher Chase-Dunn shows that globalization has lead to an increase in GDP growth for developing countries, but mostly produces GDP growth for western nations. The gap between the core and periphery is widening as a result. Unfortunately, he does not provide any graphical representations of this data (Chase-Dunn, 2015).
                </p>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw',wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    Another aspect of this exploitation is that certain countries utilize forced or bonded labor, which is essentially a form of slavery that countries will utilize to maximize profits when exporting. How common is this? More than you would hope. The book "Bonded Labor", which discusses the exploitation of labor in southeast Asia, states that there are currently around 20 million bonded laborers worldwide (Kara, 2014). Does this mean that every time we import goods someone else is being exploited? Fortunately for you this is not always the case. Many people are victims of <i>epistemic privilege</i>, which is when you are blinded by your lack of experiences (Johnson, 2017). People don't care because they don't experience it themselves. When it comes to your supply chain you have more control than you think, and knowing about will help you prepare. While there is a moderate risk of utilizing unethical supply sources when determining where to buy from, the risk can be mitigated by checking your sources carefully. You can always see where your items come from, so why not do research on the location? Or perhaps you could even audit your source to gain insight. When thinking about this topic it is easy to be consumed by the <i>affect heuristic</i>, which is described as a mental shortcut to help make quick decisions based on strong emotions (Bodemer and Gaissmaier, 2015). This is a sensitive subject and nobody likes to hear about slavery or exploitation, but remember that you can control how your team utilizes global supply.
                </p>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw',wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    Finally, let's discuss the information pertaining to the globalist perspective. As you may remember, the globalists believe that global trade is essential and has many more benefits than risks. So, how beneficial is it actually? For starters, as mentioned before, global trade does increase productivity and does not reduce domestic jobs. In fact, it is almost impossible to stay competitive in the market without utilizing cheap international prices. If globalization is so effective for boosting production, why do people criticize it? Aside from the exploitation mentioned in the previous section, there are many other factors.                
                </p>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw',wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    Firstly, data shows that global trade is directly related to the speed in which we consume finite resources. With any boost in production and efficiency that comes from joining the global market also comes an increased usage of materials. The graph below depicts coal consumption in China, which increases drastically since they have entered the world trade organization.                 
                </p>
                <img width='70%' src={coal} style={{paddingTop: '10px'}}/>
                <div style={{fontSize: '6px'}}>
                    https://oilprice.com/Finance/the-Economy/12-Negative-Aspects-of-Globalization.html               
                </div>
                <img width='70%' src={carbon} style={{paddingTop: '10px'}}/>
                <div style={{fontSize: '6px'}}>
                    https://oilprice.com/Finance/the-Economy/12-Negative-Aspects-of-Globalization.html               
                </div>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', paddingTop: '3vh',wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    Lastly, there is the matter of investing. Data shows that increases in foreign investment are directly linked to a decrease in domestic investment. Whether or not this is truly a problem at the moment is unclear, but in the event of a crash in the markets of foreign countries it certainly would be an issue to have a lot of money invested there. 
                </p>
                <img width='70%' src={invest} style={{paddingTop: '10px'}}/>
                <div style={{fontSize: '6px'}}>
                    https://oilprice.com/Finance/the-Economy/12-Negative-Aspects-of-Globalization.html               
                </div>
                <p style={{color: '#000', marginLeft: '10vw', paddingRight: '10vw', paddingTop: '3vh', paddingBottom: '3vh', wordWrap: 'break-word', textIndent: '20px', textAlign: 'start'}}>
                    At last we have presented all of the facts to help you and your team make better decisions when setting up your supply chains. To recap, the act of trade itself is not a huge risk and has its benefits to society. There is a low risk of the American economy suffering as a result of importing and research shows that jobs do not decrease either. While there is a moderate risk that a link in your supply chain is furthering exploitation and corruption, this can be mitigated if you analyze your sources. Globalization has caused increases in productivity, but there is a high risk that increased productivity leads to high levels of carbon emissions and reduction of finite resources. When meeting with your team it will be beneficial to utilize <i>consensus communication</i>, which is the mutual consideration of respect of everyone involved in your team with the purpose of coming to an agreed upon conclusion or plan (Cole and Fellows, 2008). This will lead to an increase in <i>informational diversity</i>, which is a greater depth of knowledge due to sharing ideas within a group where people think differently (Phillips, 2014). Your supply chain runs deep, so making sure that you have a diverse group of thinkers will help you make sure that every step of the chain is executed properly and without negative consequences.      
               </p>
               <a href = {pdf} target = "_blank" style={{paddingBottom: '5vh'}}> Download Works Cited </a>
            </div>
        )
    }
}
