import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/scripture")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div class="bg-[url(/images/flower5.jpg)] bg-cover bg-no-repeat bg-center">
      <div class="container mx-auto px-6 ">
        <h1>Healing Scriptures!</h1>
        <div className="p-2 text-left text-sm/1 leading-7">
          <div class="grid grid-cols-2 gap-6 mt-3 p-5">
            <div>
              <h4 class="text-center border-3 border-black-100 text-shadow-md">
                Psalm 103:1-5
              </h4>
              <p class="border-1 m-1 p-1  bg-white rounded-md shadow-2xl text-shadow-md">
                Bless the Lord, O my soul; And all that is within me, bless His
                holy name! Bless the Lord, O my soul, And forget not all His
                benefits: Who forgives all your iniquities, Who heals all your
                diseases, Who redeems your life from destruction, Who crowns you
                with lovingkindness and tender mercies, Who satisfies your mouth
                with good things, So that your youth is renewed like the
                eagle's.
              </p>
            </div>
            <div>
              <h4 class="text-center border-3 border-black-100 text-shadow-md">
                Isaiah 53:4-5
              </h4>
              <p class="border-1 m-1 p-4 bg-white rounded-md shadow-2xl text-shadow-md">
                Surely He has borne our griefs And carried our sorrows; Yet we
                esteemed Him stricken, Smitten by God, and afflicted. But He was
                wounded for our transgressions, He was bruised for our
                iniquities; The chastisement for our peace was upon Him, And by
                His stripes we are healed.
              </p>
            </div>
            <div>
              <h4 class="text-center border-3 border-black-100 text-shadow-md">
                2 Corinthians 10:3-5
              </h4>
              <p class="border-1 m-1 p-2  bg-white rounded-md shadow-2xl text-shadow-md">
                For though we walk in the flesh, we do not war according to the
                flesh. For the weapons of our warfare are not carnal but mighty
                in God for pulling down strongholds, casting down arguments and
                every high thing that exalts itself against the knowledge of
                God, bringing every thought into captivity to the obedience of
                Christ,
              </p>
            </div>
            <div>
              <h4 class="text-center border-3 border-black-100 text-shadow-md">
                Romans 8:10-11
              </h4>
              <p class="border-1 m-1 p-2  bg-white rounded-md shadow-2xl text-shadow-md">
                And Christ lives within you, so even though your body will die
                because of sin, the Spirit gives you life because you have been
                made right with God. The Spirit of God, who raised Jesus from
                the dead, lives in you. And just as God raised Christ Jesus from
                the dead, he will give life to your mortal bodies by this same
                Spirit living within you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
