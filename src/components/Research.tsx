import React from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import PageHeading from './PageHeading';
import Reveal from './Reveal';
import { LatticeVisual, WaveletVisual } from './ResearchVisuals';

const Research: React.FC = () => (
  <div className="page-container">
    <div className="app-main">
      <PageHeading eyebrow="Papers & publications" title="Research" />
      <div className="research-list">
        <Reveal>
          <div className="content-card research-box">
            <article aria-labelledby="wavelet-title">
              <header className="research-header">
                <p className="research-label">Signal processing / Literature review</p>
                <h2 className="paper-title" id="wavelet-title">Dimensionality Reduction, Compression, and Feature Extraction for Higher-Dimensional Data</h2>
                <p className="paper-byline">Co-authored with Reginald Bolman · University of Nebraska–Lincoln</p>
              </header>
              <div className="research-content">
                <div className="research-summary">
                  <p className="research-lead">Finding useful structure in complex, high-dimensional data.</p>
                  <p className="research-text">We compared PCA, manifold learning, and wavelet-based methods for reducing dimensions, compressing data, and extracting features. The review focuses on how these approaches handle sparse, nonlinear signals and the tradeoffs between computation, data size, and information retained.</p>
                  <p className="research-text">We examined Haar, Daubechies, MODWT, and Mallat transforms through published studies of seismic compression, biomedical signal analysis, and hyperspectral classification. A central theme: multiscale representations can preserve local features that a single global representation may miss.</p>
                  <div className="tag-list"><span className="pill-label">Wavelets</span><span className="pill-label">Dimensionality reduction</span><span className="pill-label">Feature extraction</span></div>
                </div>
                <WaveletVisual />
              </div>
              <div className="research-actions"><a href="/research/Compression_Higher_Dimensional_Data.pdf" target="_blank" rel="noopener noreferrer" className="text-link" aria-label="Read the dimensionality reduction paper">Read paper <ArrowUpRight size={16} aria-hidden="true" /></a><a href="/research/Compression_Higher_Dimensional_Data.pdf" download className="download-button" aria-label="Download dimensionality reduction paper PDF">Download PDF <Download size={16} aria-hidden="true" /></a></div>
            </article>
          </div>
        </Reveal>
        <Reveal>
          <div className="content-card research-box">
            <article aria-labelledby="lattice-title">
              <header className="research-header">
                <p className="research-label">Cryptography / Literature review</p>
                <h2 className="paper-title" id="lattice-title">Advantages of Lattice Based Cryptography</h2>
                <p className="paper-byline">Co-authored with Mark Hollis and Gregory Nail · University of Nebraska–Lincoln</p>
              </header>
              <div className="research-content">
                <div className="research-summary">
                  <p className="research-lead">Exploring the mathematical foundations of post-quantum security.</p>
                  <p className="research-text">We surveyed why hard lattice problems are promising foundations for cryptography in the face of quantum threats to RSA, Diffie–Hellman, and elliptic-curve systems. The paper introduces shortest- and closest-vector problems, then examines NTRUEncrypt and Ring Learning with Errors.</p>
                  <p className="research-text">We compared security assumptions, key sizes, computational costs, and implementation limitations, including NTRU’s malleability concerns. Hardware implementations and IoT applications connect the theory to practice: a difficult mathematical problem is only one part of building a secure system.</p>
                  <div className="tag-list"><span className="pill-label">Lattices</span><span className="pill-label">NTRUEncrypt</span><span className="pill-label">Ring-LWE</span></div>
                </div>
                <LatticeVisual />
              </div>
              <div className="research-actions"><a href="/research/Lattice_Based_Cryptography.pdf" target="_blank" rel="noopener noreferrer" className="text-link" aria-label="Read the lattice cryptography paper">Read paper <ArrowUpRight size={16} aria-hidden="true" /></a><a href="/research/Lattice_Based_Cryptography.pdf" download className="download-button" aria-label="Download lattice cryptography paper PDF">Download PDF <Download size={16} aria-hidden="true" /></a></div>
            </article>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
);

export default Research;
