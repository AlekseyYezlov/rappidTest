import { dia, shapes } from '@clientio/rappid';
import { ObjectHash } from 'backbone';

import {
  FONT_FAMILY,
  PADDING_L,
  LINE_WIDTH,
  MAIN_COLOR,
  MESSAGE_ICON,
  MAX_PORT_COUNT,
  OUT_PORT_HEIGHT,
  OUT_PORT_WIDTH,
  OUT_PORT_LABEL,
  PORT_BORDER_RADIUS,
  PADDING_S,
  ADD_PORT_SIZE,
  REMOVE_PORT_SIZE,
  BACKGROUND_COLOR,
  LIGHT_COLOR,
  DARK_COLOR,
} from '../../theme';

const SHAPE_SIZE = 48;

const FlowchartStart = dia.Element.define(
  'stencil.FlowchartStart',
  {
    name: 'FlowchartStart',
    size: { width: SHAPE_SIZE, height: SHAPE_SIZE },
    ports: {
      groups: {
        out: {
          position: {
            name: 'manual',
            args: {
              x: 5,
              y: 30,
            },
          },
          size: {
            width: 16,
            height: 16,
          },
          attrs: {
            portBody: {
              magnet: 'active',
              refWidth: '100%',
              refHeight: '100%',
              refX: '100%',
              refY: '140%',
              fill: DARK_COLOR,
              ry: PORT_BORDER_RADIUS,
              rx: PORT_BORDER_RADIUS,
            },
          },
          markup: [
            {
              tagName: 'rect',
              selector: 'portBody',
            },
          ],
        },
      },
      items: [
        {
          group: 'out',
          attrs: { portLabel: { text: OUT_PORT_LABEL } },
        },
      ],
    },
    attrs: {
      body: {
        fill: MAIN_COLOR,
        stroke: 'none',
        refCx: '50%',
        refCy: '50%',
        refR: '50%',
      },
      icon: {
        d:
          'M 2 8 L 4.29 5.71 L 1.41 2.83 L 2.83 1.41 L 5.71 4.29 L 8 2 L 8 8 Z M -2 8 L -8 8 L -8 2 L -5.71 4.29 L -1 -0.41 L -1 -8 L 1 -8 L 1 0.41 L -4.29 5.71 Z',
        fill: '#FFFFFF',
        refX: '50%',
        refY: '50%',
      },
      label: {
        text: 'Start',
        refDx: PADDING_L,
        refY: '50%',
        textAnchor: 'start',
        textVerticalAnchor: 'middle',
        fill: '#242424',
        fontFamily: FONT_FAMILY,
        fontSize: 13,
      },
    },
  },
  {
    markup: [
      {
        tagName: 'circle',
        selector: 'body',
      },
      {
        tagName: 'path',
        selector: 'icon',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
  }
);

const FlowchartEnd = dia.Element.define(
  'stencil.FlowchartEnd',
  {
    name: 'FlowchartEnd',
    size: { width: SHAPE_SIZE, height: SHAPE_SIZE },
    ports: {
      groups: {
        in: {
          position: {
            name: 'manual',
            args: {
              x: 21,
              y: 0,
            },
          },
          size: {
            width: 16,
            height: 16,
          },
          attrs: {
            portBody: {
              magnet: 'passive',
              refWidth: '100%',
              refHeight: '100%',
              refY: '-50%',
              rx: PORT_BORDER_RADIUS,
              ry: PORT_BORDER_RADIUS,
              fill: LIGHT_COLOR,
              stroke: DARK_COLOR,
              strokeWidth: LINE_WIDTH,
            },
          },
          markup: [
            {
              tagName: 'rect',
              selector: 'portBody',
            },
          ],
        },
      },
      items: [
        {
          group: 'in',
        },
      ],
    },
    attrs: {
      body: {
        fill: MAIN_COLOR,
        stroke: 'none',
        refCx: '50%',
        refCy: '50%',
        refR: '50%',
      },
      icon: {
        d:
          'M 5 -8.45 L 6.41 -7.04 L 3 -3.635 L 1.59 -5.04 Z M -4.5 3.95 L -1 3.95 L -1 -1.63 L -6.41 -7.04 L -5 -8.45 L 1 -2.45 L 1 3.95 L 4.5 3.95 L 0 8.45 Z',
        fill: '#FFFFFF',
        refX: '50%',
        refY: '50%',
      },
      label: {
        text: 'End',
        refDx: PADDING_L,
        refY: '50%',
        textAnchor: 'start',
        textVerticalAnchor: 'middle',
        fill: '#242424',
        fontFamily: FONT_FAMILY,
        fontSize: 13,
      },
    },
  },
  {
    markup: [
      {
        tagName: 'circle',
        selector: 'body',
      },
      {
        tagName: 'path',
        selector: 'icon',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
  }
);

const Message = dia.Element.define(
  'stencil.Message',
  {
    name: 'Message',
    size: { width: 280, height: 95 },
    ports: {
      groups: {
        in: {
          position: {
            name: 'manual',
            args: {
              x: -10,
              y: 0,
            },
          },
          size: {
            width: 16,
            height: 16,
          },
          attrs: {
            portBody: {
              magnet: 'passive',
              refWidth: '100%',
              refHeight: '100%',
              refY: '-50%',
              rx: PORT_BORDER_RADIUS,
              ry: PORT_BORDER_RADIUS,
              fill: LIGHT_COLOR,
              stroke: DARK_COLOR,
              strokeWidth: LINE_WIDTH,
            },
          },
          markup: [
            {
              tagName: 'rect',
              selector: 'portBody',
            },
          ],
        },
        out: {
          position: {
            name: 'manual',
            args: {
              x: 153,
              y: 30,
            },
          },
          size: {
            width: 16,
            height: 16,
          },
          attrs: {
            portBody: {
              magnet: 'active',
              refWidth: '100%',
              refHeight: '100%',
              refX: '100%',
              refY: '140%',
              fill: DARK_COLOR,
              ry: PORT_BORDER_RADIUS,
              rx: PORT_BORDER_RADIUS,
            },
          },
          markup: [
            {
              tagName: 'rect',
              selector: 'portBody',
            },
          ],
        },
      },
      items: [
        {
          group: 'in',
        },
        {
          group: 'out',
          attrs: { portLabel: { text: OUT_PORT_LABEL } },
        },
      ],
    },
    attrs: {
      body: {
        refWidth: '100%',
        refHeight: '100%',
        fill: LIGHT_COLOR,
        strokeWidth: 5 / 2,
        stroke: '#D4D4D4',
        rx: 3,
        ry: 3,
      },
      icon: {
        width: 20,
        height: 20,
        refX: PADDING_L,
        refY: 20,
        xlinkHref: MESSAGE_ICON,
      },
      label: {
        text: 'Component',
        refX: 50,
        refY: '50%',
        textAnchor: 'start',
        textVerticalAnchor: 'middle',
        fill: '#242424',
        fontFamily: FONT_FAMILY,
        fontSize: 13,
      },
    },
  },
  {
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
      {
        tagName: 'text',
        selector: 'description',
      },
      {
        tagName: 'image',
        selector: 'icon',
      },
    ],
  }
);

export const Link = dia.Link.define(
  'stencil.Link',
  {
    attrs: {
      root: {
        cursor: 'pointer',
      },
      line: {
        fill: 'none',
        connection: true,
        stroke: DARK_COLOR,
        strokeWidth: LINE_WIDTH,
      },
      wrapper: {
        fill: 'none',
        connection: true,
        stroke: 'transparent',
        strokeWidth: 10,
      },
      arrowhead: {
        d: 'M -5 -2.5 0 0 -5 2.5 Z',
        stroke: DARK_COLOR,
        fill: DARK_COLOR,
        atConnectionRatio: 0.55,
        strokeWidth: LINE_WIDTH,
      },
    },
    labels: [
      {
        attrs: {
          labelText: {
            text: 'Label',
          },
        },
        position: {
          distance: 0.25,
        },
      },
    ],
  },
  {
    markup: [
      {
        tagName: 'path',
        selector: 'line',
      },
      {
        tagName: 'path',
        selector: 'wrapper',
      },
      {
        tagName: 'path',
        selector: 'arrowhead',
      },
    ],
  }
);

Object.assign(shapes, {
  stencil: {
    Message,
    FlowchartStart,
    FlowchartEnd,
    Link,
  },
});
