// Substitua a parte de renderização de vídeo no bloco de workflow com este código:

{showWorkflowVideo ? (
  <div className="mb-6">
    <div className="relative aspect-video rounded-lg overflow-hidden bg-black/60 border border-white/10">
      <div className="absolute inset-0 w-full h-full z-10"> 
        <iframe 
          src={`https://www.youtube.com/embed/kbknZyu3CGA?rel=0&modestbranding=1`}
          title="Demonstração de Automação de Workflow"
          className="w-full h-full absolute inset-0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
) : (
  <div className="mt-6 relative">
    <div className="absolute left-[22px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#9b87f5] to-[#d0ff00]"></div>
    
    {automationWorkflow.steps.map((step, index) => (
      <div key={index} className="flex mb-5 relative">
        <div 
          className="w-11 h-11 rounded-full flex items-center justify-center z-10 shrink-0" 
          style={{ backgroundColor: step.color }}
        >
          {step.icon}
        </div>
        <div 
          className="ml-4 bg-black/40 rounded-lg p-3 flex-1 border" 
          style={{ borderColor: `${step.color}30` }}
        >
          <h5 className="text-white text-sm font-medium mb-1">
            {step.type === "trigger" ? "Trigger" : step.type === "filter" ? "Condição" : "Ação"}: {step.title}
          </h5>
          <p className="text-white/60 text-xs">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
)}