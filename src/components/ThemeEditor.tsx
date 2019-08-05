import React from 'react';
import { Component } from 'react';
import {Box} from 'grommet';
import {inject, observer} from 'mobx-react';
import {ThemeStoreDefaultProps, ThemeStoreName, ThemeStoreProps} from "../stores/ThemeStore";

interface Props extends ThemeStoreProps{}

@inject(ThemeStoreName)
@observer
export class ThemeEditor extends Component<Props> {
    static defaultProps = ThemeStoreDefaultProps;

    render() {
        return(
            <Box>
                {this.props.theme.name}
            </Box>
        );
    }
}

