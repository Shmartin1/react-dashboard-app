import React from 'react';

const Research: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col pt-8">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Research
        </h1>

        <div className="space-y-6">
          {/* Paper 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Dimensionality Reduction, Compression, and Feature Extraction for Higher-Dimensional Data
            </h2>
            <p className="research-text">
              As numerous domains such as biology, astronomy, 
              geography, etc. produce increasing volumes of data there is a
              need for sophisticated automated tools to manage this data.
              While there has been much work done in the fields of clustering,
              statistical analysis, machine learning etc. real-world data sets
              are often hindered by the so-called curse of dimensionality. Most
              common clustering algorithms fail to produce meaningful results
              on data sets with high dimensionality.
              While various techniques have been studied to address this
              problem such as "manifold learning", principal component analysis, or many univariate/multivariate feature selection methods
              such as ANOVA, there exist clear shortcomings with each of these
              methods. 
            </p>
            <p className="research-text">
              First, not all data can be assumed to be locally smooth,
              not all data can be assumed to be linear, and not all models can
              be assumed univariate especially with respect to highly non-linear
              data sets with multiple exogenous and endogenous variables such
              as hyperspectral images. Additionally the inherent sparsity of
              objects within these data sets often leads to results of little to no
              significance when applying the aforementioned methods.
              Due to issues such as these, much research has gone into
              utilizing wavelet transform image processing techniques for
              dimensionality reduction, feature detection/extraction problems,
              and the related problem of data compression. This paper will
              overview the different advances in utilizing wavelets to address
              the problems of feature extraction, dimensionality reduction, and
              compression from the context of a variety of fields within science
              and mathematics.
            </p>
            <a 
              href="/research/Compression_Higher_Dimensional_Data.pdf" 
              download
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Download PDF
            </a>
          </div>

          {/* Paper 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Advantages of Lattice Based Cryptography
            </h2>
            <p className="research-text">
              Lattice cryptography is a field of cryptography
              that has many advantages over some of the more fundamental
              cryptographic algorithms. Some of such advantages are that it
              is impossibly hard algorithm to break, and performs well in the
              worst-case assumptions. We live in a period of rapid technological
              development, and as certain encryption schemes become less
              secure we will need to invest in cryptographic systems that can
              not so easily be exploited. In this paper we will discuss how lattice
              Cryptography works and some of its advantages.
            </p>
            <p className="research-text">
              As each day passes, technology advances and so does the
              progress towards trivializing the decryption of our modern cryptographic systems. With the eventuality of quantum computing
              becoming commercialized and their use more spread it will be
              critical to rely on systems that are not vulnerable to quantum
              attacks. Lattice cryptography has conjectured security against
              quantum attacks, has simpler and more efficient algorithms,
              strong security guarantees from worst-case hardness, and versatile and powerful cryptographic objects. 
            </p>
            <a 
              href="/research/Lattice_Based_Cryptography.pdf" 
              download
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;