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


const StackedLineGraph = ({ donations, multiplier }) => {
  const data = {
    labels: [['April', formatter.format(donations[0])], ['May', formatter.format(donations[1])], ['June', formatter.format(donations[2])],
    ['July', formatter.format(donations[3])], ['August', formatter.format(donations[4])], ['September', formatter.format(donations[5])], ['October', formatter.format(donations[6])]],
    datasets: [
      {
        fill: true,
        label: 'Rowing',
        data: [1.3, 1.3, 1.35, 2.5, 2.7, 3.9, 2.85].map(val => val * multiplier),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Biking',
        data: [7.8, 13, 18.9, 22.5, 8.1, 0, 0].map(val => val * multiplier),
        borderColor: 'rgba(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        fill: true,
        label: 'Running',
        data: [0, 0, 0.12, 0.24, 11.59, 13.70, 11.94].map(val => val * multiplier),
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



export default function TheAsk() {

  const base = [9.10, 14.30, 20.37, 25.24, 22.39, 17.60, 14.79];
  const [donations, setDonations] = useState(base);
  const [multiplier, setMultiplier] = useState(1);

  const handleChange = (e) => {
    setDonations(base.map(val => val * e.target.value));
    setMultiplier(e.target.value);
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
              <li>A dashboard with daily updates of my comments, workouts, books read, courses completed, and talks/tabling events.</li>
              <li>To become an early supporter of, what I believe to be, the next big push in the pro-life movement.</li>
              <li>An opportunity to impact thousands around you shortly after launch, more to be discussed a few months in. There is a specific task in mind.</li>
              <li>The inside scoop on much more yet to be revealed such as the name and what else we are building.</li>
            </ul>
            Before joining the church, I thought I could do this alone; but not only can I not do this alone, but I <b><u>ought not</u></b>.
          </p>
        </div>
      </div>
      <div className="about--section--img">
        {/* <img src="./img/about-me.png" alt="About Me" /> */}
        <div>
          <p>Donation per mile of biking, running or rowing</p>
          <p>Biking: {formatter.format(0.01 * multiplier)}/mile</p>
          <p>Running: {formatter.format(0.03 * multiplier)}/mile</p>
          <p>Rowing: {formatter.format(0.05 * multiplier)}/mile</p>
        </div>
        <StackedLineGraph donations={donations} multiplier={multiplier} />
        <h2>Multiplier</h2>
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
        <div className="hero--section-description">
          <br />The financial support will be tied to my training to make sure I stay on track and avoid injury. Training will begin with non-impact sports such as biking and rowing to avoid injury, and transition to running closer to launch date.
        </div>
      </div>
    </section>
  );
}
