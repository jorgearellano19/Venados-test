
## Venados Test.

For running the project you can run it with:
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console. <br/>

The .env file is in the project only for testing purpose. 

###IMPORTANT: If you're testing in local, it's important to avoid the cors policy. I recommend this google extension: https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc

### Project Structure.

The project has the following structure:

- assets/ Folder for assets in the project.
- common/ Contains common tools used in all project.
  -dictionaries.ts Contains dictionaries for data.
  -interfaces.ts Contains interfaces types used in the project. The difference between this interfaces and the types is that the interfaces are used for the async functions (connection with backend).
  -types.ts. Contains the types used in the app. type is used in the project instead an interface when it's for describing some function or type that is not used in async functins.
  
-Components / Contains all the components used in the project.
  -Home: Here's the home component. It's where the games are loaded. Contains three files:
    -Home.tsx: The principal component.
    -_Calendar.tsx: The component used for the calendar.
    -_TeamInfo.tsx: Component used for put the image and the team name in the calendar.
   -LoadingPage: Here's the Loading page component that is displayed only when the state of the application is in loading.
   -Players: This folder contains the players' tab.
    -Players.tsx: Here's the principal grid with all the player's circle info.
    -_PlayerCircle.tsx: Contains the image, name and position of the player.
    -_PlayerDetail.tsx: When we click on a player circle, one modal is displayed with the detail info about the player.
   -stats: Component used for the statistics table.
    -_GeneraTable: Table used for the stats.
    -_TableRow: Row designed especially in this table project.
    -_TableHeader: Header used for this table project.
    -Stats: Componentm that wraps the table.
   -Sidebar: Component that contains the sidebar of the app. Contains the behaivour on different windows sizes.
-Services: Contains one request.ts that exports the axios request for the backend.
-Store: For this project I used Redux for state management. This folder contains all the data about redux.
  -Actions: Folder with all the actions in the project
  -Reducers: Folder with the reducers in the project.
  -index.ts: Contains the store creation and exportation.
 -App.tsx - Contains the skeleton on the app. Wraps the sidebar, header and the router. Also is provided by the store and the theme.
 -App.theme.tsx - Contains the theme of the application (Developed with material-ui)
 
### TOOLS
Here's the tools that I used for the project:
| Dependency      | Use in the project              |
| -------------   | -------------                   |
| React-Redux     | Used for state management. Combined with react hooks (with useSelector and useDispatch)                |
| React Hooks     | Used instead class components for the state application. I used the useEffect and useState hook.       |
| Material-ui     | Used for the App UI. For theme creation and responsive design.                                         |
| Typescript      | Static type validation. I prefer it over propTypes because Typescript is in compilation time.          |
| moment          | Dates management in the project.                                                                       |
| redux-thunk     | Redux tool for manage async actions in redux.                                                          | 
| react-router-dom| Manage routes in react app. (Used with hooks useHistory and useLocation).                              |
| axios           | Manage HTTP requests.                                                                                  | 
  
