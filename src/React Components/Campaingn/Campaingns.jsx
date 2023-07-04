import React from "react";
import s from "./Campaingns.module.css";

function Campaingns() {
  return (
    <div className={s.Campaingns}>
    <h2>Our Campaingns</h2>
      <article>
        <section className={s.card}>
          <div className={s.textContent}>
            <h3>Ration distribution during lockdown</h3>
            <p>
            In response to the crisis facing his country, he decided to create and distribute packets of essential items such as dry rations and sanitization products that could last up to 10 days. Through his contacts, he was able to raise enough funds which enabled him to provide food for 140 families initially. As more funds were raised, it eventually reached 1 lakh rupees which allowed him to help 12 villages within a radius of 10km. His actions demonstrate an admirable level of commitment towards helping those in need during this difficult time.
            </p>
            {/* <a href="#">Join now</a> */}
          </div>
          <div className={s.visual}>
          <img src="./campaign_Pics/1.png" alt="Pic of Ration distribution during Bihar and UP flood"/>
          </div>
        </section>
        <section className={s.card}>
          <div className={s.textContent}>
            <h3>Ration distribution during Bihar and UP flood</h3>
            <p>
            We are deeply saddened by the destruction caused by floods in Bihar and U.P, which has had a devastating impact on the livelihoods of daily wagers and agriculture. In this time of natural crisis and pandemic, we have taken it upon ourselves to provide relief to those worst affected areas in U.P & Bihar, having distributed 400 relief packages so far; containing essential items such as food grains, clothing materials etc., enabling us to make a difference for those who need it most right now.
            </p>
            {/* <a href="#">Join now</a> */}
          </div>
          <div className={s.visual}>
          <img src="./campaign_Pics/flood.png" alt="Pic of Ration distribution during Bihar and UP flood"/>
          </div>
        </section>
        <section className={s.card}>
          <div className={s.textContent}>
            <h3>Cleanliness campaign at Gomti river Front, Lucknow</h3>
            <p>
            This was the time between Dussehra and Diwali, the rivers are very polluted due to immersion of statues and rituals which has been done. With the help of local citizen, we were able to clean the river for the period of seven days. It made awareness of cleanliness and importance of river among the local citizen.
            </p>
            {/* <a href="#">Join now</a> */}
          </div>
          <div className={s.visual}>
          <img src="./campaign_Pics/Clean_1.png" alt="Pic of Ration distribution during Bihar and UP flood"/>
          </div>
        </section>
        <section className={s.card}>
          <div className={s.textContent}>
            <h3>Road safety awareness</h3>
            <p>
            Our Sankalp team organized a road awareness rally in NH-28 in Gopalganj, Bihar. We stood there at chowk and whoever not wearing helmet given a rose and we explained them the consequences of not wearing a helmet. After this people promised to wear helmet every time they are on their vehicle.
            </p>
            {/* <a href="#">Join now</a> */}
          </div>
          <div className={s.visual}>
          <img src="./campaign_Pics/road.png" alt="Pic of Ration distribution during Bihar and UP flood"/>
          </div>
        </section>
        <section className={s.card}>
          <div className={s.textContent}>
            <h3>Diwali celebration with poor children</h3>
            <p>
            Diwali is the festival of lights, and we celebrate with lots of joy we bring sweets, crackers and many things. But due to financial conditions children are not able to enjoy it fully. Our team distributed candles and sweet to many families and celebrated a joyous Diwali with them.
            </p>
            {/* <a href="#">Join now</a> */}
          </div>
          <div className={s.visual}>
          <img src="./campaign_Pics/diwali.png" alt="Pic of Ration distribution during Bihar and UP flood"/>
          </div>
        </section>
        <section className={s.card}>
          <div className={s.textContent}>
            <h3>Ration distribution with the Indian Air-force</h3>
            <p>
            We teamed up with Airforce wives’ welfare association to distribute 200 ration packets to the families that are financially weaker. 
            </p>
            {/* <a href="#">Join now</a> */}
          </div>
          <div className={s.visual}>
          <img src="./campaign_Pics/air force.png" alt="Pic of Ration distribution during Bihar and UP flood"/>
          </div>
        </section>
        <section className={s.card}>
          <div className={s.textContent}>
            <h3>Children-Day celebration</h3>
            <p>
            On the occasion of children day we visited a primary school in a village hafua balram, Kushinagar. We gathered 200+ students across the village and organized various fun games and distributed prizes among the winners. We also distributed stationary, books and motivated them to study for a better future.
            </p>
            {/* <a href="#">Join now</a> */}
          </div>
          <div className={s.visual}>
          <img src="./campaign_Pics/children.png" alt="Pic of Ration distribution during Bihar and UP flood"/>
          </div>
        </section>
        <section className={s.card}>
          <div className={s.textContent}>
            <h3>Holi celebration</h3>
            <p>
            We donated sweets and colours of happiness to many families and children. They often feel segregated from the society but we bring them together and make them feel their existence and motivated them for the bright future.
            </p>
            {/* <a href="#">Join now</a> */}
          </div>
          <div className={s.visual}>
          <img src="./campaign_Pics/holi.png" alt="Pic of Ration distribution during Bihar and UP flood"/>
          </div>
        </section>
        <section className={s.card}>
          <div className={s.textContent}>
            <h3>Rakshabandhan celebration</h3>
            <p>
            Team Sankalp celebrated Rakhi with students at 4 pathshalas, distributed sweets  and Rakhis. Girl students tied Rakhi to volunteer/ teachers of pathshala as symbol of protection and gratitude towards them.
            </p>
            {/* <a href="#">Join now</a> */}
          </div>
          <div className={s.visual}>
          <img src="./campaign_Pics/rakshabandhan.png" alt="Pic of Ration distribution during Bihar and UP flood"/>
          </div>
        </section>
        <section className={s.card}>
          <div className={s.textContent}>
            <h3>Independence day celebration</h3>
            <p>
            On 75th Independence Day we hoisted the flag at our pathshala’s and distributed sweets among the children and teachers/volunteers for thier selfless dedication towards the society.
            </p>
            {/* <a href="#">Join now</a> */}
          </div>
          <div className={s.visual}>
          <img src="./campaign_Pics/independence.png" alt="Pic of Ration distribution during Bihar and UP flood"/>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Campaingns;
