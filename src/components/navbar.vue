          <template>
  <div id="navbar">
    <v-bottom-nav :active.sync="bottomNav" :value="true" absolute :background="white">
      <v-btn color="teal" flat value="recent">
        <span>Create Poll</span>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>
<script>
export default {
  name: "Navbar"
}
  </script>