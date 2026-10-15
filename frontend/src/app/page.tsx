"use client";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  emoji: string;
}

const categories: string[] = ["Guitars", "Keyboards", "Drums", "Accessories", "Studio"];
const products: Product[] = [
  { id: 1, name: "Sunburst Electric Guitar", category: "Guitars", price: 349, emoji: "🎸" },
  { id: 2, name: "Cedar Acoustic Guitar", category: "Guitars", price: 229, emoji: "🎸" },
  { id: 3, name: "88 Key Digital Piano", category: "Keyboards", price: 599, emoji: "🎹" },
  { id: 4, name: "Pocket Synthesizer", category: "Keyboards", price: 179, emoji: "🎹" },
  { id: 5, name: "Maple Snare Drum", category: "Drums", price: 149, emoji: "🥁" },
  { id: 6, name: "Studio Drum Kit", category: "Drums", price: 749, emoji: "🥁" },
  { id: 7, name: "Everyday Guitar Strings", category: "Accessories", price: 12, emoji: "🎼" },
  { id: 8, name: "Padded Instrument Case", category: "Accessories", price: 49, emoji: "🎒" },
  { id: 9, name: "Studio Monitor Headphones", category: "Studio", price: 89, emoji: "🎧" },
  { id: 10, name: "Vocal Recording Microphone", category: "Studio", price: 129, emoji: "🎙️" }
];

function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <div className={`product-image tone-${product.category.toLowerCase()}`} aria-hidden="true">{product.emoji}</div>
    <p className="product-category">{product.category}</p>
    <h3 className="product-name">{product.name}</h3>
    <p className="product-price">${product.price.toLocaleString("en-US")}</p>
  </article>;
}

export default function HomePage() {
  const [category, setCategory] = useState("All instruments");
  const visibleProducts = products.filter(product => category === "All instruments" || product.category === category);
  return <>
    <a className="skip-link" href="#catalog">Skip to catalog</a>
    <header className="shop-header">
      <a className="brand" href="#"><span aria-hidden="true">♫</span> MusicBox<span className="brand-dot">.</span></a>
      <nav aria-label="Main navigation"><ul className="header-nav">
        <li><a href="#catalog">Instruments</a></li><li><a href="#featured">Spotlight</a></li><li><a href="#about">Our story</a></li>
      </ul></nav>
    </header>
    <div className="store-stats" aria-label="Store statistics">
      <p><strong>{products.length}</strong> curated instruments & essentials</p>
      <p><strong>{categories.length}</strong> ways to find your sound</p>
      <p><strong>100%</strong> made for music lovers</p>
    </div>
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div><p className="eyebrow">FOR THE LOVE OF MAKING MUSIC</p><h1 id="hero-title">Your next sound<br />starts here<span>.</span></h1><p className="hero-copy">From your first chord to your next recording.<br />Find an instrument that feels like you.</p><a className="primary-link" href="#catalog">Explore the collection <span aria-hidden="true">↗</span></a></div>
        <div className="record-art" aria-hidden="true"><div className="record"><div className="record-label">MUSIC<br /><b>BOX</b><i /></div></div><span className="record-caption">GOOD THINGS START WITH A LITTLE NOISE.</span></div>
      </section>
      <div className="section-intro"><p className="eyebrow">THE COLLECTION</p><h2>Make room for music.</h2><p>Small beginnings. Big possibilities.</p></div>
      <div className="shop-layout">
        <aside className="filters" aria-label="Catalog filters">
          <p className="eyebrow">FIND YOUR SOUND</p><h2 className="filters-title">Categories</h2>
          <ul className="filters-list">{["All instruments", ...categories].map(item => <li key={item}><button type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}<span>{item === "All instruments" ? products.length : products.filter(p => p.category === item).length}</span></button></li>)}</ul>
          <p className="sidebar-note">A collection for curious beginners and everyday music makers.</p>
        </aside>
        <section className="catalog" id="catalog" aria-labelledby="catalog-title">
          <div className="catalog-heading"><h2 id="catalog-title">{category}</h2><p role="status">{visibleProducts.length} pieces</p></div>
          <div className="product-grid">{visibleProducts.map(product => <ProductCard product={product} key={product.id} />)}</div>
        </section>
      </div>
      <section className="featured" id="featured" aria-labelledby="featured-title">
        <div className="featured-icon" aria-hidden="true">🎹</div><div><p className="eyebrow">IN THE SPOTLIGHT</p><h2 id="featured-title">A little piano.<br />A world of possibility.</h2><p>Meet the 88 Key Digital Piano. Start with one note and see where it takes you.</p></div><div className="featured-action"><strong>$599</strong><a href="#catalog" onClick={() => setCategory("Keyboards")}>Explore keyboards <span aria-hidden="true">↗</span></a></div>
      </section>
      <section className="compact-section" aria-labelledby="compact-title"><div className="catalog-heading"><div><p className="eyebrow">AT A GLANCE</p><h2 id="compact-title">The whole collection</h2></div><span>10 pieces, one shared passion</span></div><div className="product-grid product-grid--compact">{products.map(product => <ProductCard key={product.id} product={product} />)}</div></section>
      <section id="about" className="info-block"><p className="eyebrow">OUR STORY</p><h2>For the music you haven’t made yet.</h2><p>MusicBox is an imaginary neighborhood music shop with a simple idea: making music should feel inviting. Our collection brings guitars, keys, drums, and studio essentials together in one place.</p><p className="demo-note">This is a student layout project. Products and prices are illustrative; no orders, payments, or deliveries are available.</p></section>
    </main>
    <footer className="site-footer"><a className="brand" href="#">♫ MusicBox.</a><p>© 2026 MusicBox. A little louder, a little more you.</p><a href="#catalog">Back to collection ↑</a></footer>
  </>;
}
