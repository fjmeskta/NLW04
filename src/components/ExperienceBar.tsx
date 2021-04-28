export function ExperienceBar() {
  return (
    <header className="experienceBar">
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }}></div>
        <span className="currentExperience" style={{ left: '50%' }}>300 xp</span>
      </div>
      <span>600xp</span>
    </header>
  );
}