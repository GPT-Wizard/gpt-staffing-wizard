import React, { useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { DataGrid, GridCellModes } from "@mui/x-data-grid";

function EditToolbar(props) {
  const {
    selectedCellParams,
    cellMode,
    cellModesModel,
    setCellModesModel,
  } = props;

  const handleSaveOrEdit = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    if (cellMode === "edit") {
      setCellModesModel({
        ...cellModesModel,
        [id]: {
          ...cellModesModel[id],
          [field]: { mode: GridCellModes.View },
        },
      });
    } else {
      setCellModesModel({
        ...cellModesModel,
        [id]: {
          ...cellModesModel[id],
          [field]: { mode: GridCellModes.Edit },
        },
      });
    }
  };

  const handleCancel = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    setCellModesModel({
      ...cellModesModel,
      [id]: {
        ...cellModesModel[id],
        [field]: { mode: GridCellModes.View, ignoreModifications: true },
      },
    });
  };

  return (
    <div>
      <button className="w-20 m-2 px-2 py-1 border rounded-lg border-secondary text-secondary" onClick={handleSaveOrEdit}>
        {cellMode === "edit" ? "Save" : "Edit"}
      </button>
      <button className="w-20 m-2 px-2 py-1 border disabled:border-grey disabled:text-grey rounded-lg border-secondary text-secondary" onClick={handleCancel} disabled={cellMode === "view"}>
        Cancel
      </button>
    </div>
  );
}

EditToolbar.propTypes = {
  cellMode: PropTypes.oneOf(["edit", "view"]).isRequired,
  cellModesModel: PropTypes.object.isRequired,
  selectedCellParams: PropTypes.shape({
    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
  }),
  setCellModesModel: PropTypes.func.isRequired,
};

export default function DataEditingGrid({ data }) {
  const rows = data;
  const [selectedCellParams, setSelectedCellParams] = useState(null);
  const [cellModesModel, setCellModesModel] = useState({});

  const handleCellFocus = useCallback((event) => {
    const row = event.currentTarget.parentElement;
    const id = row.dataset.id;
    const field = event.currentTarget.dataset.field;
    setSelectedCellParams({ id, field });
  }, []);

  const cellMode = useMemo(() => {
    if (!selectedCellParams) {
      return "view";
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || "view";
  }, [cellModesModel, selectedCellParams]);

  const handleCellKeyDown = useCallback(
    (params, event) => {
      if (cellMode === "edit") {
        // Prevents calling event.preventDefault() if Tab is pressed on a cell in edit mode
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode]
  );

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onCellKeyDown={handleCellKeyDown}
        cellModesModel={cellModesModel}
        onCellModesModelChange={(model) => setCellModesModel(model)}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: {
            cellMode,
            selectedCellParams,
            setSelectedCellParams,
            cellModesModel,
            setCellModesModel,
          },
          cell: {
            onFocus: handleCellFocus,
          },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}

const columns = [
  { field: "Role", headerName: "Role", width: 180, editable: true },
  {
    field: "Number of People",
    headerName: "No of People",
    width: 100,
    editable: true,
  },
  {
    field: "Years of Experience",
    headerName: "Experience (Yrs)",
    width: 130,
    editable: true,
  },
  {
    field: "Possible Skills Required",
    headerName: "Possible Skills Required",
    width: 500,
    editable: true,
  },
];
