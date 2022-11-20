import { useEffect, useState } from 'preact/hooks'
import { fetchJson, loadChangelog } from './services'

interface Project {
  changelog: {
    html: string
  },
  pathWithNamespace: string,
  nameWithNamespace: string,
  webUrl: string
}

export function ChangelogDashboard () {
  const [projectList, setProjectList] = useState<Project[]>([])

  useEffect(() => {
    if (projectList.length) {
      return
    }
    fetchJson('/api/v4/projects?starred=true').then((list) => {
      setProjectList(list)
      return list
    }).then(list => {
      list.reduce(async (promise: any, project: Project) => {
        await promise
        await loadChangelog(project.pathWithNamespace).then(changelog => {
          setProjectList((l) => {
            return l.map(p => {
              if (p.pathWithNamespace === project.pathWithNamespace) {
                return {
                  ...p,
                  changelog
                }
              }
              return p
            })
          })
        })
      }, Promise.resolve())
    })
  }, [])
  return (
    <div>
      <div class="page-title-holder flex-fill d-flex align-items-center">
        <h1>
          ChangelogDashboard
        </h1>
      </div>
      <div class="row gl-mt-3 dashboard-cards">
        {projectList.map((project: Project)=> (
           <div class="col-12 col-xl-3 col-lg-4 col-md-8 col-sm-12 px-2">
           <div data-qa-selector="dashboard_project_card" class="js-dashboard-project dashboard-card card border-0">
             <div class="card-header gl-border-0 gl-py-3 gl-display-flex gl-align-items-center bg-light">
               <div class="gl-flex-grow-1 block-truncated">
                 <a href={project.webUrl}><span>{project.nameWithNamespace}</span></a>
               </div>
             </div>
             <div class="dashboard-card-body card-body bg-secondary" style={{ overflow: 'scroll', height: '1200px' }} dangerouslySetInnerHTML={{ __html: project?.changelog?.html }}>
             </div>
           </div>
         </div>
        ))}
      </div>
    </div>
  )
}
