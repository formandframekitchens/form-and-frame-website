"use client";

import Link from "next/link";
import { useState } from "react";
import { enquiryHref, installationOptions, supplierOptions, type InstallationId, type SupplierId } from "../lib/enquiry";

export function KitchenChoiceFlow() {
  const [installation, setInstallation] = useState<InstallationId | "">("");
  const [supplier, setSupplier] = useState<SupplierId>("not-chosen");
  const choice = installationOptions.find(option => option.value === installation);

  return <section className="kitchen-choice-flow" id="choose-installation" aria-labelledby="kitchen-choice-title">
    <p className="eyebrow">Let’s start with your project</p>
    <h2 id="kitchen-choice-title">What do you need help with?</h2>
    <p className="kitchen-choice-intro">Choose what sounds like you. We’ll carry your choices into your enquiry.</p>
    <fieldset className="kitchen-choice-fieldset">
      <legend>1. Choose your kitchen service</legend>
      <div className="kitchen-choice-grid">
        {installationOptions.map(option => <label className="kitchen-choice" key={option.value}>
          <input type="radio" name="installation-choice" value={option.value} checked={installation === option.value} onChange={() => { setInstallation(option.value); setSupplier("not-chosen"); }} />
          <span><strong>{option.label}</strong><small>{option.description}</small></span>
        </label>)}
      </div>
    </fieldset>
    {choice && <div className="kitchen-choice-next">
      {choice.usesSupplier ? <fieldset className="kitchen-choice-fieldset">
        <legend>2. Who is supplying your kitchen?</legend>
        <p className="kitchen-choice-hint">Choose a supplier, or leave “Not chosen yet” if you’re still deciding.</p>
        <div className="kitchen-supplier-options">
          {supplierOptions.map(option => <label className="kitchen-supplier-choice" key={option.value}>
            <input type="radio" name="supplier-choice" value={option.value} checked={supplier === option.value} onChange={() => setSupplier(option.value)} />
            <span>{option.label}</span>
          </label>)}
        </div>
        {supplier === "other" && <p className="kitchen-choice-hint">Tell us the supplier’s name in your enquiry and share the plans so we can review the fitting requirements.</p>}
      </fieldset> : <div>
        <h3>A traditional in-frame kitchen, from design to fitting</h3>
        <p className="kitchen-choice-hint">Share your room, ideas and timing. We’ll discuss the design, supply and installation as one project.</p>
        <Link className="text-link" href="/in-frame-kitchens">Explore our in-frame kitchens <span aria-hidden="true">↗</span></Link>
      </div>}
      <div className="kitchen-choice-summary">
        <p role="status"><strong>Your enquiry</strong><span>{choice.label}{choice.usesSupplier && ` · ${supplierOptions.find(option => option.value === supplier)?.label}`}</span></p>
        <Link className="button" href={enquiryHref({ service: choice.service, installation: choice.value, supplier: choice.usesSupplier ? supplier : undefined })}>Continue to enquiry <span aria-hidden="true">↗</span></Link>
      </div>
    </div>}
    <noscript><p>Tell us about your kitchen in the <a href={enquiryHref({ service: "kitchen-installation" })}>enquiry form</a>, or contact us using the details below.</p></noscript>
  </section>;
}
