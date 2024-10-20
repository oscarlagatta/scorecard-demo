// import {
//   useQuery,
//   useMutation,
//   QueryClient,
// } from '@tanstack/react-query';
// import {
//   getApiV2CitiesOptions,
//   postApiV2CitiesByCityIdPointsofinterestMutation,
//   putApiV2CitiesByCityIdPointsofinterestByPointofinterestidMutation,
//   patchApiV2CitiesByCityIdPointsofinterestByPointofinterestidMutation,
//   deleteApiV2CitiesByCityIdPointsofinterestByPointofinterestidMutation
// } from './api/@tanstack/react-query.gen'; // Adjust the import path as necessary
//
// import {
//   GetApiV2CitiesData,
//   GetApiV2CitiesByCityIdData,
//   GetApiV2CitiesByCityIdPointsofinterestData,
//   PostApiV2CitiesByCityIdPointsofinterestData,
//   PutApiV2CitiesByCityIdPointsofinterestByPointofinterestidData,
//   PatchApiV2CitiesByCityIdPointsofinterestByPointofinterestidData,
//   DeleteApiV2CitiesByCityIdPointsofinterestByPointofinterestidData
// } from './api/types.gen';
// import { Options } from '@hey-api/client-axios';
//
// type UseCrudOperationsProps = {
//   getCitiesOptions?: Options<GetApiV2CitiesData>;
//   getCityOptions?: Options<GetApiV2CitiesByCityIdData>;
//   getPointsOfInterestOptions?: Options<GetApiV2CitiesByCityIdPointsofinterestData>;
//   createPointOfInterestOptions?: Partial<Options<PostApiV2CitiesByCityIdPointsofinterestData>>;
//   updatePointOfInterestOptions?: Partial<Options<PutApiV2CitiesByCityIdPointsofinterestByPointofinterestidData>>;
//   patchPointOfInterestOptions?: Partial<Options<PatchApiV2CitiesByCityIdPointsofinterestByPointofinterestidData>>;
//   deletePointOfInterestOptions?: Partial<Options<DeleteApiV2CitiesByCityIdPointsofinterestByPointofinterestidData>>;
// };
//
// const useCrudOperations = ({
//                              getCitiesOptions,
//                              getCityOptions,
//                              getPointsOfInterestOptions,
//                              createPointOfInterestOptions,
//                              updatePointOfInterestOptions,
//                              patchPointOfInterestOptions,
//                              deletePointOfInterestOptions
//                            }: UseCrudOperationsProps) => {
//   // Initialize the query client
//   const queryClient = new QueryClient();
//
//   // Queries
//   const getCitiesQuery = useQuery(getApiV2CitiesOptions(getCitiesOptions));
//
//   // Mutations
//   const createPointOfInterest = useMutation(
//     postApiV2CitiesByCityIdPointsofinterestMutation(createPointOfInterestOptions)
//   );
//   const updatePointOfInterest = useMutation(
//     putApiV2CitiesByCityIdPointsofinterestByPointofinterestidMutation(updatePointOfInterestOptions)
//   );
//   const patchPointOfInterest = useMutation(
//     patchApiV2CitiesByCityIdPointsofinterestByPointofinterestidMutation(patchPointOfInterestOptions)
//   );
//   const deletePointOfInterest = useMutation(
//     deleteApiV2CitiesByCityIdPointsofinterestByPointofinterestidMutation(deletePointOfInterestOptions)
//   );
//
//   // Return all queries and mutations in a single object
//   return {
//     getCitiesQuery,
//     createPointOfInterest,
//     updatePointOfInterest,
//     patchPointOfInterest,
//     deletePointOfInterest
//   };
// };
//
// export default useCrudOperations;
// //
