import Userlocation from "@/app/components/Addlocation/userLocation";

export default function HomePage() {
  return (
    <main className="w-full px-x">
      <div className="w-fit mx-auto my-16 space-y-4">
         <h3>Add your location for Better Experience</h3>
        <Userlocation />
      </div>
    </main>
  );
}
