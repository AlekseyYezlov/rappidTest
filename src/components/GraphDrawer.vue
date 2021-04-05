<template>
  <q-page class="flex">
    <!-- <img alt="Quasar logo" src="../assets/logo.png"> -->
    <q-layout view="lHr lpR lFr">
      <q-drawer show-if-above side="left" bordered>
        <!-- drawer content -->
        <div ref="stencil" class="stencil-container"></div>
      </q-drawer>

      <q-page-container>
        <div class="canvas" ref="canvas"></div>
      </q-page-container>
      <q-page-container style="">
        <div class="q-pa-md">
          <q-btn color="primary" label="Get Json" ref="getJsonRef" />
          <q-btn
            class="q-ml-xs"
            color="primary"
            label="Save Json"
            :disabled="!json"
            @click="saveJsonToLocalStorage"
          />
          <div class="jsonData">
            <textarea
              placeholder='"cells": [{ "type": "app.Message"}]'
              spellcheck="false"
              :value="json"
              disabled
            ></textarea>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<style lang="scss">
@import '~@clientio/rappid/rappid.css';
.canvas {
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #a0a0a0;

  .joint-paper {
    border: 1px solid #a0a0a0;
  }
}

.jsonData {
  padding-top: 10px;
  textarea {
    width: 100%;
    min-height: 150px;
    resize: none;
  }
}
</style>

<script>
import { dia, ui, shapes } from '@clientio/rappid';
import { stencilConfig } from '../rappid/stencil.config';
import '../rappid/shapes/stencil.shapes';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'GraphDrawer',
  data() {
    return {
      graph: dia.Graph,
      paper: dia.Paper,
      scroller: ui.PaperScroller,
      stencil: ui.Stencil,
      json: null,
    };
  },

  methods: {
    ...mapActions(['saveJson']),
    saveJsonToLocalStorage() {
      this.saveJson(this.json);
    },
  },

  computed: {
    ...mapGetters(['getJsonData']),
  },

  mounted() {
    const graph = (this.graph = new dia.Graph({}, { cellNamespace: shapes }));
    const paper = (this.paper = new dia.Paper({
      width: '100%',
      height: '100%',
      cellViewNamespace: shapes,
      el: this.$refs.canvas,
      model: graph,
      linkPinning: false,
      multiLinks: false,
      snapLinks: true,
      defaultConnector: {
        name: 'rounded',
      },
      defaultLink: () => new shapes.stencil.Link(),
      validateConnection: (
        sourceView,
        sourceMagnet,
        targetView,
        targetMagnet
      ) => {
        if (sourceView === targetView) return false;
        if (targetView.findAttribute('port-group', targetMagnet) !== 'in')
          return false;
        if (sourceView.findAttribute('port-group', sourceMagnet) !== 'out')
          return false;
        return true;
      },
      background: {
        color: '#F8F9FA',
      },
      async: true,
    }));

    const stencil = (this.stencil = new ui.Stencil({
      paper,
      width: 300,
      height: 800,
      layout: {
        columns: 1,
        columnWidth: 280,
      },
    }));
    this.$refs.stencil.append(stencil.render().el);

    const stencilShapes = stencilConfig.shapes.map(
      (shape) => new shapes.stencil[shape.name](shape)
    );

    stencil.load(stencilShapes);

    if (this.getJsonData) {
      graph.fromJSON(JSON.parse(this.getJsonData));
    }

    this.$refs.getJsonRef.$el.addEventListener('click', () => {
      this.json = JSON.stringify(graph.toJSON(), null, 2);
    });
  },
};
</script>
