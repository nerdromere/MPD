import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Slider } from '@mui/material';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const ROWING_MILES = [26, 26, 27, 50, 54, 78, 57, 57];
const BIKING_MILES = [780, 1300, 1890, 2250, 810, 0, 0, 0];
const RUNNING_MILES = [0, 0, 4, 8, 386.3, 456.7, 398, 398];


const StackedLineGraph = ({ donations, multiplier }) => {
  const data = {
    labels: [
      ['April', formatter.format(donations[0]), `${BIKING_MILES[0]}mi biking`, `${RUNNING_MILES[0]}mi running`, `${ROWING_MILES[0]}mi rowing`],
      ['May', formatter.format(donations[1]), `${BIKING_MILES[1]}mi biking`, `${RUNNING_MILES[1]}mi running`, `${ROWING_MILES[1]}mi rowing`],
      ['June', formatter.format(donations[2]), `${BIKING_MILES[2]}mi biking`, `${RUNNING_MILES[2]}mi running`, `${ROWING_MILES[2]}mi rowing`],
      ['July', formatter.format(donations[3]), `${BIKING_MILES[3]}mi biking`, `${RUNNING_MILES[3]}mi running`, `${ROWING_MILES[3]}mi rowing`],
      ['August', formatter.format(donations[4]), `${BIKING_MILES[4]}mi biking`, `${RUNNING_MILES[4]}mi running`, `${ROWING_MILES[4]}mi rowing`],
      ['September', formatter.format(donations[5]), `${BIKING_MILES[5]}mi biking`, `${RUNNING_MILES[5]}mi running`, `${ROWING_MILES[5]}mi rowing`],
      ['October', formatter.format(donations[6]), `${BIKING_MILES[6]}mi biking`, `${RUNNING_MILES[6]}mi running`, `${ROWING_MILES[6]}mi rowing`]
    ],
    datasets: [
      {
        fill: true,
        label: 'Rowing',
        data: ROWING_MILES.map(val => val * multiplier * 0.05),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Biking',
        data: BIKING_MILES.map(val => val * multiplier * 0.01),
        borderColor: 'rgba(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        fill: true,
        label: 'Running',
        data: RUNNING_MILES.map(val => val * multiplier * 0.03),
        borderColor: 'rgba(34, 139, 34)',
        backgroundColor: 'rgba(34, 139, 34, 0.5)',
      },

    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Estimated Training Plan'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Total Monthly Donation'
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};



export default function TheAsk({ setMultiplierParent }) {

  const base = [9.10, 14.30, 20.37, 25.24, 22.39, 17.60, 14.79];
  const [donations, setDonations] = useState(base);
  const [multiplier, setMultiplier] = useState(1);

  const handleChange = (e) => {
    setDonations(base.map(val => val * e.target.value));
    setMultiplier(e.target.value);
    setMultiplierParent(e.target.value);
  }

  return (
    <section id="TheAsk" className="about--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">The Ask</h1>
          <p className="hero--section-description">
            The ideal time to launch is after the 2024 election, and the ideal time to start the full-time training is <b><u>now</u></b>. Even though I love my software engineering job, and it will be bittersweet to leave, there is much more at stake. If you want this to come to fruition, please consider supporting me financially by filling out the form below and I’ll set up a call with you to answer questions.
          </p>
          <p className="hero--section-description">
            What you will get:
            <ul>
              <li>A passionate pro-lifer on the field, motivated with love for the unborn and their parents.</li>
              <li>360° video of every cardio training (biking, running, rowing).</li>
              <li>Access to a dashboard with daily updates of my comments, workouts, books read, courses completed, and talks/tabling events.</li>
              <li>To become an early supporter of, what I believe to be, the next big push in the pro-life movement.</li>
              <li>An opportunity to impact thousands around you shortly after launch; more to be discussed a few months in. There is a specific task in mind.</li>
              <li>The inside scoop on much more yet to be revealed such as the name and what else we are building.</li>
            </ul>
            Before joining the church, I thought I could do this alone; but not only can I not do this alone, but I <b><u>ought not</u></b>.
          </p>
        </div>
      </div>
      <div className="about--section--img">
        {/* <img src="./img/about-me.png" alt="About Me" /> */}
        <div style={{ paddingRight: "1.4vw" }}>
          <StackedLineGraph donations={donations} multiplier={multiplier} />
          <Slider
            aria-label="Always visible"
            defaultValue={1}
            // getAriaValueText={valuetext}
            step={1}
            min={1} max={20}
            // marks={["marks"]}
            valueLabelDisplay="on"
            onChange={handleChange}
          />
        </div>
        <h2>Multiplier</h2>
        <div className="hero--section-description">
          <p>Support me my donating per mile of biking, running or rowing:</p>
          <p>Biking: {formatter.format(0.01 * multiplier)}/mile</p>
          <p>Running: {formatter.format(0.03 * multiplier)}/mile</p>
          <p>Rowing: {formatter.format(0.05 * multiplier)}/mile</p>
        </div>
        <div className="hero--section-description">
          <br />The financial support will be tied to my training to make sure I stay on track and avoid injury. Training will begin with non-impact sports such as biking and rowing to avoid injury, and transition to running closer to launch date.
          <br /><br />Please note that there is much that can go wrong such as injury. It is possible that I will need to take more breaks, therefore less mileage per month.
        </div>
      </div>
    </section>
  );
}
