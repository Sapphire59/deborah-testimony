import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div class="container mx-auto px-3 ">
      <div className="p-2 text-left text-md/5 leading-7">
        <div class="grid grid-cols-2 gap-5 mt-4 p-5">
          <div>
            <p class="border-1 m-1 p-1  bg-white rounded-md shadow-2xl">
              Dear Friend,
              <br />I built this site to share with you my testimony of the
              amazing healing power of my Lord Jesus Christ. I suffered with
              terrible, painful eczema for many years, and I had breathing
              problems on and off for years as well. But praise God He has
              healed me.
            </p>
          </div>
          <div>
            <p class="border-1 m-1 p-4 bg-white rounded-md shadow-2xl">
              Healing is one of many precious gifts Jesus has purchased for us
              on the Cross. Jesus loves you so much and its His great desire to
              heal you. I pray this site will inspire you to look into the Word
              of God and let the Holy Spirit reveal to you His wisdom on health
              and healing for you personally.
            </p>
          </div>
        </div>
      </div>
      <footer>This site was built by Deborah Chacko</footer>
    </div>
  );
}
