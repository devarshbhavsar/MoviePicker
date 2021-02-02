<template>
    <v-app>
        <v-col cols="12" sm="6" md="3">
            <v-text class="text-h5">
                Movie Search
            </v-text>

            <v-text-field
                label="Name"
            ></v-text-field>

            <v-list v-if="genres">
                <v-list-item-content>
                    <v-list-item-title>Action: 28</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Adaventure: 12</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Animation: 16</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Comedy: 35</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Crime: 80</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Documentary: 99</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Drama: 18</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Family: 10751</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Fantasy: 14</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>History: 36</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Horror: 27</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Mystery: 9648</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Romance: 10749</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Science Fiction: 878</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>TV Movie: 10770</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Thriller: 53</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>War: 10752</v-list-item-title>
                </v-list-item-content>
            </v-list>

            <v-btn @click="showGenres"> Show Genre Codes </v-btn>

            <v-text-field
                label="Genre"
            ></v-text-field>

            <v-text-field
                label="Minimum Rating (out of 10)"
            ></v-text-field>

            <v-text-field
                label="Earliest Release Year"
            ></v-text-field>

            <v-btn @click="search()">
                Submit
            </v-btn>
        </v-col>
    </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MovieSearch',
  data: () => ({
    genres: false
  }),
  methods: {
    search () {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie?api_key=b88b54f227bb73187758739eaf787602&language=en-US&sort_by=popularity.desc&include_adult=true',
        params: {
          page: '1',
          'release_date.gte': 2016,
          'vote_count.gte': 8,
          'vote_average.gte': 8,
          with_genres: 53
        }
      }

      axios.request(options).then(function (response) { console.log(response.data) }).catch(function (error) {
        console.error(error)
      })
    },
    showGenres () {
      this.genres = !this.genres
    }
  }
}
</script>
