import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div class="container mx-auto px-3 ">
      <div className="p-2 text-left text-md/5 leading-6">
        <div class="grid grid-cols-2 gap-6 mt-6 p-5">
          <div>
            <p>
              Dear Friend, I built this site to share with you my testimony of
              the amazing healing power of my Lord Jesus Christ. I suffered with
              terrible, painful eczema for many years, and I had breathing
              problems on and off for years as well. But praise God He has
              healed me. I also believe He has renewed my youth to the point I
              don't look my age.
            </p>
          </div>
          <div>
            <p>
              Healing is one of many precious gifts Jesus has purchased for us
              on the Cross. It is His will for you to walk in healing & health,
              pain and sickness is a curse that Christ has redeemed us from.
              Jesus loves you so much and its His great desire to heal you. I
              pray this site will inspire you to look into the Word of God and
              let the Holy Spirit reveal to you His wisdom on health and healing
              for you personally.
            </p>
          </div>
        </div>
      </div>
      <footer>This site was built by Deborah Chacko</footer>
    </div>
  );
}
