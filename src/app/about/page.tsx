import PageShell from "@/components/PageShell";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "About Theradora | A Family Healthcare Business",
  "Theradora is an Australian family business built on the belief that healthcare should be personal, accessible and centred on people.",
  "/about/"
);

export default function About() {
  return (
    <PageShell title="About Theradora" lead="A family business, growing to serve Australia">
      <p>
        Theradora is an Australian family business built on a simple belief: healthcare should be personal, accessible
        and centred on people.
      </p>
      <p>
        What began with a passion for helping people live healthier, more independent lives is growing into a broader
        commitment to delivering quality healthcare services to communities across Australia. As we grow, we remain
        guided by the values that started it all: compassion, integrity, respect and genuine care for every person we
        serve.
      </p>

      <h2>Growing with purpose</h2>
      <p>
        We believe that meaningful healthcare starts with understanding people, their needs and the communities they
        call home.
      </p>
      <p>
        Through our growing network of healthcare businesses, we aim to make professional care more accessible, build
        lasting relationships with clients and their families, and support the healthcare professionals who make a
        difference every day.
      </p>
      <p>
        Our growth is intentional. We focus on building strong teams, developing trusted partnerships and creating
        services that respond to the changing needs of Australian communities.
      </p>

      <h2>Our family values</h2>
      <p>
        Being a family business shapes the way we work. We value personal relationships, accountability and treating
        people with the same care and respect we would want for our own family.
      </p>
      <p>
        These principles guide how we support our clients, work with our partners and build our team. As Theradora
        expands, we are committed to preserving that personal approach, ensuring that growth never comes at the expense
        of quality or compassion.
      </p>

      <h2>Supporting communities across Australia</h2>
      <p>
        Through our healthcare businesses, including Physio To Home and AlphaCare Physiotherapy, we are building a
        foundation for continued growth across Australia.
      </p>
      <p>
        Each business has its own identity and focus, united by a shared commitment to professional care, positive
        outcomes and meaningful connections with the people and communities we serve.
      </p>
      <p>
        We look forward to working alongside clients, families, healthcare professionals and community partners as we
        continue to grow.
      </p>

      <h2>Looking ahead</h2>
      <p>
        Our vision is to build a trusted Australian healthcare group that grows responsibly, creates opportunities for
        healthcare professionals and makes a meaningful difference in people&rsquo;s lives.
      </p>
      <p>
        We may be growing in size and reach, but our purpose remains the same: to put people first, build lasting
        relationships and deliver care that matters.
      </p>
    </PageShell>
  );
}
