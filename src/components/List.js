import React from 'react';

const List = ({pokemon}) => {
  return (
    <div class="listing-area pt-120 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-md-6">
            <div class="row">
              <div class="col-lg-12">
                <div class="count mb-35">
                  <span>Listings are available</span>
                </div>
              </div>
            </div>
            <div class="popular-directorya-area fix">
              <div class="row">
                {/* {pokemon.map((item, i) => (
                  <div class="col-lg-6" key={i}>
                    <div class="properties properties2 mb-30">
                      <div class="properties__card">
                        <div class="properties__img overlay1">
                          <a href="#">
                            <img
                              class="img-fluid"
                              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="properties__caption">
                          <h3>
                            <a href="#">{item.name}</a>
                          </h3>
                          <p>{item.url}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
 


 




























// import React from 'react';
// import Filters from "./Filters";
// import Movie from './Movie';
// import Slider from '@material-ui/core/Slider';
 

// const List = ({     
//     movies, 
//     totalResults,
//     viewMovieInfo, 
//     updateFilters,
//     voteCount,
//     handleLanguageChange, // Nueva prop
//     selectedLanguages, // Nueva prop 
// }) => {   
    


// return(
// <>
// <div class="listing-area pt-120 pb-120">
// <div class="container">
//     <div class="row">
//     {/* <Filters updateFilters={updateFilters} voteCount={voteCount}           handleLanguageChange={handleLanguageChange}
//           selectedLanguages={selectedLanguages}/> */}
//      <div class="col-xl-8 col-lg-8 col-md-6">

//                 <div class="row">
//                     <div class="col-lg-12">
//                         <div class="count mb-35">
//                             <span>{totalResults} Listings are available</span>
//                          </div>
//                     </div>
//                 </div>
                
//                 <div class="popular-directorya-area fix">
//                         <div class="row">                                               
//                         {movies.map((movie, i) => { return(
//                             <div class="col-lg-6">
//                                    <Movie 
//                                        key={i} 
//                                        viewMovieInfo={viewMovieInfo} 
//                                        movieId={movie.id} 
//                                        image={movie.poster_path}
//                                        title={movie.title}
//                                        popularity={movie.popularity}
//                                    /> 
//                             </div>
//                          )})}


                         
//                         </div>
//                   </div>
//              </div>
//         </div>
//    </div>
// </div>
// </>
  
//     )
// }

// export default List;


 


 