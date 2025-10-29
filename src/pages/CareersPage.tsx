import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CareersPage = () => {
  const openings = [
    {
      title: "Senior Product Designer",
      department: "Design",
      location: "Portland, OR",
      type: "Full-time"
    },
    {
      title: "Software Engineer",
      department: "Technology",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "Retail Store Manager",
      department: "Retail",
      location: "Los Angeles, CA",
      type: "Full-time"
    },
    {
      title: "Supply Chain Analyst",
      department: "Operations",
      location: "Atlanta, GA",
      type: "Full-time"
    },
    {
      title: "Brand Ambassador",
      department: "Marketing",
      location: "Multiple Locations",
      type: "Part-time"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-96 bg-primary text-primary-foreground flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-4">CAREERS AT HEKLA</h1>
            <p className="text-xl md:text-2xl">Join Our Team</p>
          </div>
        </section>

        {/* Why Join */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black mb-6">WHY HEKLA?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Hekla, we're more than just a sports brand – we're a global community united by 
              our passion for sport and innovation. Join us to work with talented people who are 
              changing the game and making a difference in the world.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-3">COMPETITIVE PAY</h3>
              <p className="text-muted-foreground">
                Industry-leading salaries and performance bonuses
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-3">HEALTH & WELLNESS</h3>
              <p className="text-muted-foreground">
                Comprehensive health insurance and fitness programs
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-3">CAREER GROWTH</h3>
              <p className="text-muted-foreground">
                Training, development, and advancement opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black mb-8 text-center">OPEN POSITIONS</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {openings.map((job, index) => (
                <div key={index} className="bg-background p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button>Apply Now</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
