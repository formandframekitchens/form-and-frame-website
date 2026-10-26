"use client";

import { useId, useState } from "react";
import { labourEstimate, KITCHEN_LABOUR_DAY_RATE } from "../lib/labour-estimate";
import styles from "./labour-calculator.module.css";

const pounds = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });

export function LabourCalculator() {
  const id = useId();
  const [days, setDays] = useState("");
  const [specialists, setSpecialists] = useState(1);
  const total = labourEstimate(days, specialists);
  const invalid = days !== "" && total === null;
  return <div className={styles.calculator} id="labour-calculator" data-labour-calculator>
    <h3 id={`${id}-title`}>Work out the agreed labour amount</h3>
    <p id={`${id}-help`}>Enter a number of whole labour days to see the arithmetic. This tool does not estimate how many days your kitchen needs or confirm team availability.</p>
    <fieldset className={styles.inputs} aria-labelledby={`${id}-title`} aria-describedby={`${id}-help ${id}-limits`}>
      <div><label htmlFor={`${id}-people`}>Number of specialists</label><select id={`${id}-people`} value={specialists} onChange={event => setSpecialists(Number(event.target.value))}>
        <option value="1">1 specialist · £300 per day</option><option value="2">2 specialists · £600 per day</option>
      </select></div>
      <div><label htmlFor={`${id}-days`}>Number of whole labour days</label><input id={`${id}-days`} type="number" inputMode="numeric" min="1" max="365" step="1" value={days} onChange={event => setDays(event.target.value)} aria-invalid={invalid} aria-describedby={`${id}-error`} placeholder="Enter days" />
      <p className={styles.error} id={`${id}-error`}>{invalid ? "Enter a whole number of days between 1 and 365." : "Days and working hours must be agreed before booking."}</p></div>
    </fieldset>
    <output className={styles.result} htmlFor={`${id}-people ${id}-days`} aria-live="polite" aria-atomic="true">
      {total === null ? <span>Enter days to see the labour amount.</span> : <><span>Illustrative labour amount</span><strong>{pounds.format(total)}</strong><span>{pounds.format(KITCHEN_LABOUR_DAY_RATE)} × {specialists} {specialists === 1 ? "specialist" : "specialists"} × {days} {days === "1" ? "day" : "days"}. No VAT added.</span></>}
    </output>
    <p id={`${id}-limits`} className={styles.limits}><strong>Labour only, not a project quotation.</strong> Materials, waste disposal, other expenses, additional work and specialist gas or electrical work are charged separately. The scope, team size and programme are confirmed in your written quotation.</p>
    <p className={styles.privacy}>Your entries stay on this page and are not sent or saved.</p>
    <noscript><p>For an agreed day-rate arrangement, multiply £300 by the number of specialists and whole labour days. JavaScript is needed for the interactive calculation above; you can still enquire using the links below.</p></noscript>
  </div>;
}
