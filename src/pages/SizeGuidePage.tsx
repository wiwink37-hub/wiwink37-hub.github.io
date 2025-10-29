import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SizeGuidePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-black mb-8">SIZE GUIDE</h1>
          
          <div className="max-w-4xl space-y-12">
            {/* Footwear */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Footwear</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="border p-3 text-left font-bold">US</th>
                      <th className="border p-3 text-left font-bold">UK</th>
                      <th className="border p-3 text-left font-bold">EU</th>
                      <th className="border p-3 text-left font-bold">CM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-3">6</td><td className="border p-3">5.5</td><td className="border p-3">38 2/3</td><td className="border p-3">23.5</td></tr>
                    <tr><td className="border p-3">7</td><td className="border p-3">6.5</td><td className="border p-3">40</td><td className="border p-3">24.5</td></tr>
                    <tr><td className="border p-3">8</td><td className="border p-3">7.5</td><td className="border p-3">41 1/3</td><td className="border p-3">25.5</td></tr>
                    <tr><td className="border p-3">9</td><td className="border p-3">8.5</td><td className="border p-3">42 2/3</td><td className="border p-3">26.5</td></tr>
                    <tr><td className="border p-3">10</td><td className="border p-3">9.5</td><td className="border p-3">44</td><td className="border p-3">27.5</td></tr>
                    <tr><td className="border p-3">11</td><td className="border p-3">10.5</td><td className="border p-3">45 1/3</td><td className="border p-3">28.5</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Apparel */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Apparel</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="border p-3 text-left font-bold">Size</th>
                      <th className="border p-3 text-left font-bold">Chest (inches)</th>
                      <th className="border p-3 text-left font-bold">Waist (inches)</th>
                      <th className="border p-3 text-left font-bold">Hips (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-3 font-bold">XS</td><td className="border p-3">31-33</td><td className="border p-3">24-26</td><td className="border p-3">33-35</td></tr>
                    <tr><td className="border p-3 font-bold">S</td><td className="border p-3">34-36</td><td className="border p-3">27-29</td><td className="border p-3">36-38</td></tr>
                    <tr><td className="border p-3 font-bold">M</td><td className="border p-3">37-39</td><td className="border p-3">30-32</td><td className="border p-3">39-41</td></tr>
                    <tr><td className="border p-3 font-bold">L</td><td className="border p-3">40-42</td><td className="border p-3">33-35</td><td className="border p-3">42-44</td></tr>
                    <tr><td className="border p-3 font-bold">XL</td><td className="border p-3">43-45</td><td className="border p-3">36-38</td><td className="border p-3">45-47</td></tr>
                    <tr><td className="border p-3 font-bold">XXL</td><td className="border p-3">46-48</td><td className="border p-3">39-41</td><td className="border p-3">48-50</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Measuring Tips */}
            <div>
              <h2 className="text-2xl font-bold mb-6">How to Measure</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.</p>
                <p><strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</p>
                <p><strong>Hips:</strong> Measure around the fullest part of your hips, keeping the tape horizontal.</p>
                <p><strong>Foot Length:</strong> Stand on a piece of paper and mark the longest point of your foot, then measure from heel to toe.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SizeGuidePage;
