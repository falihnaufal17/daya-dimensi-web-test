import ExpertiseContentItem from "./ExpertiseContentItem";

const ExpertiseContentGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
      <ExpertiseContentItem icon={"learning.svg"} title={"Applied Science & Imagination Centre"} />
      <ExpertiseContentItem icon={"diagnostic.svg"} title={"Diagnostics and Assessments"} />
      <ExpertiseContentItem icon={"transformation.svg"} title={"Human Resources & Organizational Transformation"} />
      <ExpertiseContentItem icon={"klobility.svg"} title={"Klobility"} />
      <ExpertiseContentItem icon={"executive.svg"} title={"Leadership Development"} />
      <ExpertiseContentItem icon={"learning.svg"} title={"On-Demand Online Learning"} />
    </div>
  )
}

export default ExpertiseContentGrid;
