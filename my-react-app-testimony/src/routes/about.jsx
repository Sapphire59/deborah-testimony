import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <p class="text-left">
        Dear Friend, I built this site to share with you my testimony of the
        amazing healing power of my Lord Jesus Christ. I suffered with terrible,
        painful eczema for many years, and I suffered with breathing problems on
        and off for years too. But praise God He has healed me and I also
        believe He has renewed my youth to the point I don't look my age.
        Healing is one of many precious gifts Jesus has purchased for us on the
        Cross. It is His will for you to walk in healing & health, pain and
        sickness is a curse that Christ has redeemed us from. Jesus loves you so
        much and its His great desire to heal you. I pray this site will inspire
        you to look into the Word of God and let the Holy Spirit reveal to you
        His wisdom on health and healing for you personally.
      </p>
    </div>
  );
}
