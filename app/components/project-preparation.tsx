"use client";

import { useId, useState } from "react";
import { trackEvent } from "../lib/analytics";

type PreparationItem = { title: string; detail: string };

const commonItems: PreparationItem[] = [
  { title: "Project location and access", detail: "Your project postcode, parking or delivery restrictions, and the floor where the work will take place." },
  { title: "Photographs of the room", detail: "A view of each wall, plus the corners, doors, windows and any existing services that affect the layout." },
];

const itemsByService: Record<"kitchen" | "joinery", PreparationItem[]> = {
  kitchen: [
    ...commonItems,
    { title: "Current kitchen plan", detail: "The latest layout, elevations and item list. Mark any changes since the supplier prepared the drawings." },
    { title: "Appliances and worktops", detail: "Model references, worktop choice and any specialist template or fitting arrangements. List decisions still open." },
    { title: "Preparation and other trades", detail: "What is staying, what needs removing, and who is arranging building work, plumbing, electrics and decoration." },
    { title: "Delivery and preferred dates", detail: "Expected delivery, the stage of the room and your preferred fitting period. Dates are agreed after reviewing the scope." },
  ],
  joinery: [
    ...commonItems,
    { title: "Storage priorities", detail: "What needs to fit: hanging clothes, shoes, books, a screen or work equipment. Include the largest items and what should stay accessible." },
    { title: "Approximate size and layout", detail: "A sketch or existing drawings, with wall widths, ceiling height and any slopes. Final dimensions are checked before manufacture." },
    { title: "Materials and references", detail: "Your preferred door style, finish, handles and lighting, with a few reference images. Physical samples confirm the final finish." },
    { title: "Scope and timing", detail: "Whether you need design and coordinated manufacture, or fitting of furniture already supplied, plus your preferred installation period." },
  ],
};

export function ProjectPreparation({ service }: { service: "kitchen" | "joinery" }) {
  const id = useId();
  const items = itemsByService[service];
  const [ready, setReady] = useState<string[]>([]);
  const [notice, setNotice] = useState("");

  function downloadChecklist() {
    const text = [
      `Form & Frame — ${service === "kitchen" ? "kitchen fitting" : "fitted joinery"} enquiry checklist`,
      "Use this to gather your information. You can enquire before every item is ready.", "",
      ...items.flatMap(item => [`[${ready.includes(item.title) ? "x" : " "}] ${item.title}`, item.detail, ""]),
      "Send your details through https://formandframekitchens.co.uk/contact",
      "This checklist does not submit an enquiry or confirm a quotation or booking.",
    ].join("\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `form-and-frame-${service}-checklist.txt`;
    link.click();
    trackEvent("project_checklist_download", { service_type: service });
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice("Your checklist is ready to save. Use the enquiry link when you want to send your project details.");
  }

  return <div className="project-preparation">
    <p className="service-prose">Tick what you have ready. You can send an enquiry with the information you have now and explain what is still undecided.</p>
    <fieldset>
      <legend className="sr-only">Information to prepare for your {service === "kitchen" ? "kitchen fitting" : "joinery"} enquiry</legend>
      <div className="preparation-grid">{items.map((item, index) => <label key={item.title} htmlFor={`${id}-${index}`}>
        <input id={`${id}-${index}`} type="checkbox" checked={ready.includes(item.title)} onChange={event => {
          const checked = event.target.checked;
          setReady(current => checked ? [...current, item.title] : current.filter(title => title !== item.title));
          setNotice("");
        }} />
        <span><strong>{item.title}</strong><span>{item.detail}</span></span>
      </label>)}</div>
    </fieldset>
    <div className="preparation-footer">
      <p aria-live="polite" aria-atomic="true">{ready.length} of {items.length} items ready</p>
      <button type="button" className="button button-outline" onClick={downloadChecklist}>Save my checklist <span aria-hidden="true">↓</span></button>
    </div>
    <p className="preparation-note">Your ticks stay on this page only. Saving the checklist does not send an enquiry.</p>
    <p className="preparation-note" role="status">{notice}</p>
    <noscript><p className="preparation-note">The checklist is available to read without JavaScript. To tick and download it, enable JavaScript; you can still use the enquiry link below.</p></noscript>
  </div>;
}
