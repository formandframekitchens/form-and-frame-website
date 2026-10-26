"use client";

import { useState, type ReactNode } from "react";

const topics = [
  { id: "all", label: "All updates" },
  { id: "supplier-news", label: "Supplier updates" },
  { id: "materials-design", label: "Materials & design" },
  { id: "installation-advice", label: "Installation advice" },
] as const;

export function NewsFeed({ items }: { items: { id: string; topic: string; content: ReactNode }[] }) {
  const [selected, setSelected] = useState<string>("all");
  const count = items.filter(item => selected === "all" || item.topic === selected).length;
  return <>
    <div className="news-topic-filters" role="group" aria-label="Filter news by topic">
      {topics.filter(topic => topic.id === "all" || items.some(item => item.topic === topic.id)).map(topic => <button key={topic.id} type="button" aria-pressed={selected === topic.id} aria-controls="news-feed-items" onClick={() => setSelected(topic.id)}>{topic.label}</button>)}
    </div>
    <p className="news-image-note" role="status">Showing {count} {count === 1 ? "article" : "articles"}</p>
    <div className="news-card-grid" id="news-feed-items">{items.map(item => <div className="news-feed-item" key={item.id} hidden={selected !== "all" && item.topic !== selected}>{item.content}</div>)}</div>
  </>;
}
