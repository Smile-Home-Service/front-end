/**
 * REDUX DATA FLOW DIAGRAM
 *
 * This file visualizes how data flows through your Redux setup
 */

/*

┌─────────────────────────────────────────────────────────────────────────┐
│                         REDUX STORE ARCHITECTURE                         │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                              COMPONENTS                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │ UserProfile  │  │ ServiceList  │  │  Settings    │                  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘                  │
│         │                 │                  │                           │
│         │ useSelector     │ useQuery         │ useDispatch              │
│         │ useDispatch     │                  │                           │
└─────────┼─────────────────┼──────────────────┼───────────────────────────┘
          │                 │                  │
          ▼                 ▼                  ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                           REDUX STORE                                    │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                    PERSISTED STATE                              │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │    │
│  │  │ user         │  │ appSettings  │  │ theme        │         │    │
│  │  │ (persisted)  │  │ (persisted)  │  │ (persisted)  │         │    │
│  │  └──────────────┘  └──────────────┘  └──────────────┘         │    │
│  │         ▲                 ▲                 ▲                   │    │
│  │         │                 │                 │                   │    │
│  │         └─────────────────┴─────────────────┘                   │    │
│  │                           │                                     │    │
│  │                    Redux Persist                                │    │
│  │                           │                                     │    │
│  │                           ▼                                     │    │
│  │                  localStorage                                  │    │
│  │              (persist:root key)                                │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                  NON-PERSISTED STATE                            │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │    │
│  │  │ api          │  │ contact      │  │ faq          │         │    │
│  │  │ (RTK Query)  │  │              │  │              │         │    │
│  │  └──────┬───────┘  └──────────────┘  └──────────────┘         │    │
│  │         │                                                       │    │
│  │         │ 5-minute cache                                       │    │
│  │         │ (in memory only)                                     │    │
│  └─────────┼──────────────────────────────────────────────────────┘    │
└────────────┼──────────────────────────────────────────────────────────┘
             │
             │ HTTP Requests
             ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          BACKEND API                                     │
│                  http://localhost:9000/api/v1                           │
│                                                                          │
│  GET    /users                                                          │
│  GET    /services                                                       │
│  POST   /services                                                       │
│  GET    /testimonials                                                   │
│  etc...                                                                 │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│                        DATA FLOW EXAMPLES                                │
└─────────────────────────────────────────────────────────────────────────┘

1. USER LOGIN (Persisted):
   ┌──────────┐
   │Component │ dispatch(setUser({name: "John"}))
   └────┬─────┘
        │
        ▼
   ┌────────────┐
   │ user.slice │ Updates state
   └────┬───────┘
        │
        ▼
   ┌──────────────┐
   │Redux Persist │ Saves to localStorage
   └──────────────┘
        │
        ▼
   ┌──────────────┐
   │localStorage  │ persist:root → {"user": "{\"currentUser\":{\"name\":\"John\"}}"}
   └──────────────┘

2. FETCH SERVICES (RTK Query - Not Persisted):
   ┌──────────┐
   │Component │ useGetServicesQuery()
   └────┬─────┘
        │
        ▼
   ┌────────────┐
   │service.api │ Check cache first
   └────┬───────┘
        │
        ├─ Cache Hit ──────► Return cached data
        │
        └─ Cache Miss ─────► HTTP GET /services
                             │
                             ▼
                        ┌──────────┐
                        │Backend   │
                        └────┬─────┘
                             │
                             ▼
                        Cache for 5 min (in memory)
                        │
                        ▼
                   Return to component

3. CREATE SERVICE (Mutation):
   ┌──────────┐
   │Component │ createService({name: "New"})
   └────┬─────┘
        │
        ▼
   ┌────────────┐
   │service.api │ POST /services
   └────┬───────┘
        │
        ▼
   ┌──────────┐
   │Backend   │
   └────┬─────┘
        │
        ▼
   Invalidate "Service" tag
        │
        ▼
   All queries with "Service" tag refetch automatically


┌─────────────────────────────────────────────────────────────────────────┐
│                      PERSISTENCE LIFECYCLE                               │
└─────────────────────────────────────────────────────────────────────────┘

1. APP LOAD:
   ┌──────────────┐
   │Page loads    │
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │ReduxProvider │ Creates store
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │PersistGate   │ Shows loading (or null)
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │Rehydrate     │ Read from localStorage
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │Store ready   │ Render children
   └──────────────┘

2. STATE UPDATE:
   ┌──────────────┐
   │dispatch()    │
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │Reducer       │ Update state
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │Redux Persist │ Debounced write to localStorage
   └──────────────┘

3. PAGE REFRESH:
   ┌──────────────┐
   │Refresh       │
   └──────┬───────┘
          │
          ▼
   Start from step 1 (APP LOAD)
   Persisted state is restored!


┌─────────────────────────────────────────────────────────────────────────┐
│                         CACHE INVALIDATION                               │
└─────────────────────────────────────────────────────────────────────────┘

providesTags: ["Service"]     ──┐
                                 │
                                 ├─► Tag: "Service"
                                 │
invalidatesTags: ["Service"]  ──┘

When a mutation with invalidatesTags runs:
1. All queries with matching providesTags are marked as invalid
2. Those queries automatically refetch if they're currently subscribed
3. Fresh data is displayed in components


┌─────────────────────────────────────────────────────────────────────────┐
│                      STORAGE STRUCTURE                                   │
└─────────────────────────────────────────────────────────────────────────┘

localStorage["persist:root"] = {
  "user": "{\"currentUser\":{\"name\":\"John\",\"email\":\"john@example.com\"},\"isAuthenticated\":true}",
  "appSettings": "{\"theme\":\"dark\",\"language\":\"en\"}",
  "_persist": "{\"version\":-1,\"rehydrated\":true}"
}

Note: Each slice is JSON stringified twice (Redux Persist format)

*/

export default "See comments above for data flow diagrams";
