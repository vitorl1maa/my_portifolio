import appMockup from "@/assets/app-mockup.png";

function AppInfo() {
  return (
    <section>
      <div className="w-full">
        <img src={appMockup} alt="" className="w-[800px] " />
      </div>
    </section>
  );
}

export default AppInfo;
